import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

const { width } = Dimensions.get('window');

// =====================
// VERİLER
// =====================

const screens = [
  {
    id: 1,
    title: 'Sana Özel Kıyafet!',
    subtitle: "Sunucu lideri X'te bu kıyafeti giyiyor.",
    primaryBtn: 'Herkesle aynı giyin - 80 Elmas',
    secondaryBtn: 'Hayır, sıradan görünmeye devam',
    darkPatternTitle: 'Sosyal Dışlama',
    darkPatternDesc: '"Sıradan" kelimesi ile seni utandırarak satın aldırıyorlar.',
    image: require('./assets/image1.png'),
  },
  {
    id: 2,
    title: 'BOSS Savaşı Yaklaşıyor!',
    subtitle: 'Bu seviyeyi geçemeyenler için özel teklif!',
    primaryBtn: 'Akıllı oyuncu paketi - 80 Elmas',
    secondaryBtn: 'Hazırlıksız boss savaşına katıl',
    darkPatternTitle: 'Entelektüel Küçümseme',
    darkPatternDesc: '"Hazırlıksız" ve "Kaybetmek" sözcükleriyle zekana saldırıyorlar.',
    image: require('./assets/image2.png'),
  },
  {
    id: 3,
    title: 'Yavrunun Karnı Çok Aç!',
    subtitle: 'Mama paketi - 30 Elmas',
    primaryBtn: 'Hemen mutlu et!',
    secondaryBtn: 'Hayır, aç kalmasını izle',
    darkPatternTitle: 'Vicdan Azabı',
    darkPatternDesc: 'Üzüntü duygusunu paraya çeviriyorlar.',
    image: require('./assets/image3.png'),
  },
  {
    id: 4,
    title: 'Süreli İndirim!',
    subtitle: "Sadece kısa bir zaman için geçerli olan indirimi kaçırma! Süre dolmadan hemen sahip ol.",
    primaryBtn: 'ŞİMDİ SATIN AL!',
    secondaryBtn: 'Teşekkürler, ilgilenmiyorum',
    darkPatternTitle: 'Zaman Baskısı',
    darkPatternDesc: 'Geri sayım sayaçları, size acele ile harcama yaptırmaya çalışır. Gerçek bir fırsat yoktur.',
    image: require('./assets/image13.png'),
  },
  {
    id: 5,
    title: 'TÜKENMEDEN KAP!',
    subtitle: "Son kalan ürünleri stoklar tükenmeden hemen envanterine ekle!",
    primaryBtn: 'ŞİMDİ AL! (FIRSATI YAKALA)',
    secondaryBtn: 'Satın almadan devam et',
    darkPatternTitle: 'Stok Sınırı',
    darkPatternDesc: 'Sahte stok uyarıları, ürünün bitmek üzere olduğu yalanıyla sizi acele etmeye zorlar.',
    image: require('./assets/image14.png'),
  },
  {
    id: 6,
    title: 'Popüler Ürün!',
    subtitle: "Kullanıcılar bu ürünü satın almak üzere! Acele et ve fırsatı kaçıran kişi sen olma.",
    primaryBtn: 'Hemen sepete ekle!',
    secondaryBtn: 'Teşekkürler, ilgilenmiyorum',
    darkPatternTitle: 'Sosyal Kanıt Baskısı',
    darkPatternDesc: 'Sosyal kanıt hileleri, sürü psikolojisi yaratarak üzerinizde baskı kurmaya çalışır.',
    image: require('./assets/image15.png'),
  },
];

const initialInventory = [
  { id: 1, name: 'Neon Kostüm', cat: 'Karakter Görünümü', locked: false, rare: false, image: require('./assets/image11.png')},
  { id: 2, name: 'Gölge Ninja', cat: 'Karakter Görünümü', locked: false, rare: false, image: require('./assets/image8.png') },
  { id: 3, name: 'Parıltı Efekti', cat: 'Profil Efekti', locked: false, rare: true, image: require('./assets/image9.png') },
  { id: 4, name: '???', cat: '', locked: true, rare: false, image: null },
  { id: 5, name: '???', cat: '', locked: true, rare: false, image: null },
  { id: 6, name: '???', cat: '', locked: true, rare: false, image: null },
];

const shopItems = [
  { id: 1, name: 'Neon Kostüm', cat: 'karakter', sub: 'Karakter Görünümü', price: 200, rare: false, image: require('./assets/image11.png') },
  { id: 2, name: 'Gölge Ninja', cat: 'karakter', sub: 'Karakter Görünümü', price: 120, rare: false, image: require('./assets/image8.png') },
  { id: 3, name: 'Şapka', cat: 'aksesuar', sub: 'Profil Efekti', price: 60, rare: false, image: require('./assets/image12.png') },
  { id: 4, name: 'Sırt Çantası', cat: 'aksesuar', sub: 'Karakter Görünümü', price: 80, rare: false, image: require('./assets/image7.png') },
  { id: 5, name: 'Alev Çerçevesi', cat: 'karakter', sub: 'Karakter Görünümü', price: 150, rare: true, image: require('./assets/image10.png') },
  { id: 6, name: 'Parıltı Efekti', cat: 'aksesuar', sub: 'Profil Efekti', price: 300, rare: true, image: require('./assets/image9.png')},
];

// =====================
// ANA UYGULAMA
// =====================

export default function App() {
  const [activeTab, setActiveTab] = useState<'main' | 'profile' | 'shop'>('main');
  const [elmas, setElmas] = useState(100);
  const [ownedItems, setOwnedItems] = useState<number[]>([1, 2, 3]);

  const handleBuy = (itemId: number, price: number, name: string) => {
    if (ownedItems.includes(itemId)) {
      Alert.alert('Zaten sahipsin', `${name} zaten envanterinde var.`);
      return;
    }
    if (elmas < price) {
      Alert.alert('Yetersiz Elmas', `Bu eşya için ${price} elmasa ihtiyacın var.\nMevcut: ${elmas} elmas.`);
      return;
    }
    Alert.alert(
      'Satın Al',
      `${name} için ${price} elmas ödenecek. Onaylıyor musun?`,
      [
        { text: 'Vazgeç', style: 'cancel' },
        {
          text: 'Satın Al',
          onPress: () => {
            setElmas(prev => prev - price);
            setOwnedItems(prev => [...prev, itemId]);
            Alert.alert('✅ Başarılı', `${name} envanterine eklendi!`);
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {activeTab === 'main' && (
        <MainScreen onEarnElmas={(amount) => setElmas(prev => prev + amount)} elmas={elmas} />
      )}
      {activeTab === 'profile' && (
        <ProfileScreen onShop={() => setActiveTab('shop')} ownedItems={ownedItems} elmas={elmas} />
      )}
      {activeTab === 'shop' && (
        <ShopScreen onBack={() => setActiveTab('profile')} elmas={elmas} ownedItems={ownedItems} onBuy={handleBuy} />
      )}

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => setActiveTab('main')} style={styles.navItem}>
          <Text style={[styles.navIcon, activeTab === 'main' && styles.navActive]}>☰</Text>
          <Text style={[styles.navLabel, activeTab === 'main' && styles.navActive]}>Ana</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('profile')} style={styles.navItem}>
          <Text style={[styles.navIcon, activeTab === 'profile' && styles.navActive]}>⌂</Text>
          <Text style={[styles.navLabel, activeTab === 'profile' && styles.navActive]}>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('shop')} style={styles.navItem}>
          <Text style={[styles.navIcon, activeTab === 'shop' && styles.navActive]}>🛒</Text>
          <Text style={[styles.navLabel, activeTab === 'shop' && styles.navActive]}>Dükkan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// =====================
// ANA EKRAN
// =====================

function MainScreen({ onEarnElmas, elmas }: { onEarnElmas: (n: number) => void; elmas: number }) {
  const [screenIndex, setScreenIndex] = useState(0);
  const [infoVisible, setInfoVisible] = useState(false);
  const [progress, setProgress] = useState(0.1);
  const [wrongAnswers, setWrongAnswers] = useState<Record<number, boolean>>({});
  const [earnedThisRound, setEarnedThisRound] = useState<number | null>(null);

  const current = screens[screenIndex];
  const isLast = screenIndex === screens.length - 1;

  const handlePrimary = () => {
    setProgress(prev => Math.min(prev + 0.3, 0.95));
    setInfoVisible(false);
    setWrongAnswers(prev => ({ ...prev, [screenIndex]: true }));
    setEarnedThisRound(null);
  };

  const handleSecondary = () => {
    const madeWrong = wrongAnswers[screenIndex] === true;
    let earned = 0;

    if (screenIndex === 0) earned = madeWrong ? 30 : 50;
    else if (screenIndex === 1) earned = madeWrong ? 30 : 50;
    else if (screenIndex === 2) earned = madeWrong ? 10 : 50;

    if (earnedThisRound === null) {
      onEarnElmas(earned);
      setEarnedThisRound(earned);
    }
    setInfoVisible(true);
  };

  const handleNext = () => {
    if (!isLast) {
      setScreenIndex(prev => prev + 1);
      setInfoVisible(false);
      setEarnedThisRound(null);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('./assets/image6.jpeg')} 
            style={styles.logoImage} 
            resizeMode="contain" 
          />
        </View>
        <View style={styles.elmasBadge}>
          <Text style={styles.elmasText}>💎 {elmas}</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <Image 
          source={require('./assets/image4.png')} 
          style={styles.progressImageIcon} 
          resizeMode="contain" 
        />
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${progress * 100}%` as any }]} />
          <View style={[styles.avatarDot, { left: `${Math.min(progress * 100, 93)}%` as any }]} />
        </View>
        <Image 
          source={require('./assets/image5.png')} 
          style={styles.progressImageIcon} 
          resizeMode="contain" 
        />
      </View>

      <View style={styles.titleRow}>
        <Text style={styles.title}>{current.title}</Text>
        <Text style={styles.subtitle}>{current.subtitle}</Text>
      </View>

      <Image source={current.image} style={styles.image} resizeMode="contain" />

      <TouchableOpacity style={styles.btnPrimary} onPress={handlePrimary}>
        <Text style={styles.btnPrimaryText}>{current.primaryBtn}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSecondary} onPress={handleSecondary}>
        <Text style={styles.btnSecondaryText}>{current.secondaryBtn}</Text>
      </TouchableOpacity>

      {infoVisible && (
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>{current.darkPatternTitle}</Text>
          <Text style={styles.infoDesc}>{current.darkPatternDesc}</Text>
          {earnedThisRound !== null && (
            <Text style={styles.earnedText}>💎 +{earnedThisRound} elmas kazandın!</Text>
          )}
          {!isLast ? (
            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextBtnText}>Sonraki →</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.infoNext}>✅ Tebrikler, tüm tuzakları gördün!</Text>
          )}
        </View>
      )}
    </View>
  );
}

// =====================
// PROFİL EKRANI
// =====================

function ProfileScreen({
  onShop,
  ownedItems,
  elmas,
}: {
  onShop: () => void;
  ownedItems: number[];
  elmas: number;
}) {
  const myInventory = initialInventory.map((item, index) => ({
    ...item,
    locked: !ownedItems.includes(item.id) && index >= 3,
  }));

  return (
    <ScrollView style={styles.screenContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarInitial}>K</Text>
        </View>
        <Text style={styles.username}>Kullanıcı Adı</Text>
        <View style={styles.elmasBadge}>
          <Text style={styles.elmasText}>💎 {elmas} elmas</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{ownedItems.length}</Text>
          <Text style={styles.statLabel}>Eşya</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>?/6</Text>
          <Text style={styles.statLabel}>Bölüm</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>200</Text>
          <Text style={styles.statLabel}>Puan</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Eşyalar</Text>
        <TouchableOpacity onPress={onShop}>
          <Text style={styles.sectionLink}>Tümünü Gösterin</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemsGrid}>
        {myInventory.map(item => {
          const owned = ownedItems.includes(item.id);
          return (
            <View key={item.id} style={[styles.itemCard, !owned && styles.itemCardLocked]}>
              {item.rare && owned && <View style={styles.rareBadge}><Text style={styles.rareBadgeText}>NADİR</Text></View>}
              {owned ? (
                <Image source={item.image!} style={styles.itemImage} resizeMode="contain" />
              ) : (
                <Text style={styles.lockIcon}>🔒</Text>
              )}
              {owned && <Text style={styles.itemName}>{item.name}</Text>}
              {owned && <Text style={styles.itemSub}>{item.cat}</Text>}
            </View>
          );
        })}
      </View>
      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

// =====================
// TAKAS DÜKKANI
// =====================

function ShopScreen({
  onBack,
  elmas,
  ownedItems,
  onBuy,
}: {
  onBack: () => void;
  elmas: number;
  ownedItems: number[];
  onBuy: (id: number, price: number, name: string) => void;
}) {
  const [activeFilter, setActiveFilter] = useState<'tumu' | 'karakter' | 'aksesuar'>('tumu');

  const filtered = shopItems.filter(i =>
    activeFilter === 'tumu' ? true : i.cat === activeFilter
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.shopHeader}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backBtn}>← Takas Dükkanı</Text>
        </TouchableOpacity>
        <View style={styles.elmasBadge}>
          <Text style={styles.elmasText}>💎 {elmas}</Text>
        </View>
      </View>

      <View style={styles.filterRow}>
        {(['tumu', 'karakter', 'aksesuar'] as const).map(f => (
          <TouchableOpacity
            key={f}
            style={[styles.filterBtn, activeFilter === f && styles.filterBtnActive]}
            onPress={() => setActiveFilter(f)}>
            <Text style={[styles.filterText, activeFilter === f && styles.filterTextActive]}>
              {f === 'tumu' ? 'TÜMÜ' : f === 'karakter' ? 'KARAKTER' : 'AKSESUAR'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.shopGrid}>
          {filtered.map(item => {
            const owned = ownedItems.includes(item.id);
            const canAfford = elmas >= item.price;
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.shopCard, owned && styles.shopCardOwned]}
                onPress={() => onBuy(item.id, item.price, item.name)}
                activeOpacity={0.75}>
                {item.rare && (
                  <View style={styles.rareBadge}>
                    <Text style={styles.rareBadgeText}>NADİR</Text>
                  </View>
                )}
                {owned ? (
                  <View style={styles.ownedBadge}>
                    <Text style={styles.ownedBadgeText}>✓ Sahip</Text>
                  </View>
                ) : (
                  <View style={styles.shopPriceTop}>
                    <Text style={[styles.shopPriceText, !canAfford && styles.shopPriceCantAfford]}>
                      💎 {item.price}
                    </Text>
                  </View>
                )}
                <Image source={item.image} style={[styles.shopItemImage, owned && { opacity: 0.5 }]} resizeMode="contain" />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemSub}>{item.sub}</Text>
                {!owned && (
                  <View style={[styles.buyBtn, !canAfford && styles.buyBtnDisabled]}>
                    <Text style={styles.buyBtnText}>{canAfford ? 'Satın Al' : 'Yetersiz'}</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

// =====================
// STİLLER
// =====================

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  screenContainer: { flex: 1, paddingHorizontal: 20 }, // Butonların referans aldığı sınır bu

  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderTopWidth: 0.5, borderTopColor: '#eee', backgroundColor: '#fff' },
  navItem: { alignItems: 'center' },
  navIcon: { fontSize: 22, color: '#888' },
  navLabel: { fontSize: 10, color: '#888', marginTop: 2 },
  navActive: { color: '#C0392B' },

  topBar: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    height: 50, 
    marginBottom: 5, 
    zIndex: 10 
  },
  
  logoContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -32.5 }], 
    zIndex: 20,
  },
  logoImage: { width: 65, height: 65 }, 
  
  elmasBadge: { backgroundColor: '#fdecea', borderRadius: 999, paddingHorizontal: 12, paddingVertical: 4 },
  elmasText: { fontSize: 13, fontWeight: '600', color: '#C0392B' },

  // GÜNCELLEME: Tüm özel genişlik hesaplamaları silindi. Sadece kapsayıcı genişliğini (100%) alıyor, böylece tam butonlar hizasında başlıyor.
  progressContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10, 
    gap: 8,
  },
  progressImageIcon: { width: 20, height: 20 },
  progressTrack: { flex: 1, height: 6, backgroundColor: '#f5c6c2', borderRadius: 999, position: 'relative', overflow: 'visible' },
  progressFill: { height: '100%', backgroundColor: '#C0392B', borderRadius: 999 },
  avatarDot: { position: 'absolute', top: -5, width: 16, height: 16, borderRadius: 8, backgroundColor: '#C0392B', borderWidth: 2, borderColor: '#fff', marginLeft: -8 },

  titleRow: { marginTop: 0, marginBottom: 8 }, 
  title: { fontSize: 18, fontWeight: '700', color: '#1a1a1a', marginBottom: 2 },
  subtitle: { fontSize: 13, color: '#888' },
  
  // GÜNCELLEME: Genişlik tam olarak butonlara eşit olacak (%100).
  image: { 
    width: '100%', 
    height: 280, 
    borderRadius: 12, 
    marginBottom: 15 
  },

  btnPrimary: { backgroundColor: '#C0392B', borderRadius: 999, padding: 15, alignItems: 'center', marginBottom: 15 },
  btnPrimaryText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  btnSecondary: { backgroundColor: '#e0e0e0', borderRadius: 999, padding: 15, alignItems: 'center', marginBottom: 10 },
  btnSecondaryText: { color: '#555', fontSize: 15, fontWeight: '500' },

  infoBox: { borderWidth: 1, borderColor: '#C0392B', borderRadius: 12, padding: 14, backgroundColor: '#fdecea', marginBottom: 8 },
  infoTitle: { fontSize: 14, fontWeight: '700', color: '#C0392B', marginBottom: 4, textAlign: 'center' },
  infoDesc: { fontSize: 13, color: '#555', textAlign: 'center', lineHeight: 18 },
  earnedText: { fontSize: 14, fontWeight: '700', color: '#C0392B', textAlign: 'center', marginTop: 8 },
  infoNext: { fontSize: 13, color: '#C0392B', textAlign: 'center', marginTop: 8, fontWeight: '600' },
  nextBtn: { marginTop: 10, backgroundColor: '#C0392B', borderRadius: 999, padding: 10, alignItems: 'center' },
  nextBtnText: { color: '#fff', fontWeight: '600', fontSize: 14 },

  profileHeader: { alignItems: 'center', paddingTop: 16, marginBottom: 20, gap: 6 },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 4 },
  username: { fontSize: 20, fontWeight: '600', color: '#1a1a1a' },
  statsRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  statBox: { flex: 1, backgroundColor: '#f9f9f9', borderRadius: 12, padding: 14, alignItems: 'center' },
  statValue: { fontSize: 18, fontWeight: '700', color: '#C0392B' },
  statLabel: { fontSize: 12, color: '#888', marginTop: 2 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#1a1a1a' },
  sectionLink: { fontSize: 13, color: '#C0392B' },
  itemsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  itemCard: { width: (width - 60) / 3, backgroundColor: '#f9f9f9', borderRadius: 12, padding: 10, alignItems: 'center', position: 'relative' },
  itemCardLocked: { backgroundColor: '#fdecea' },
  itemImage: { width: 60, height: 60, marginBottom: 6 },
  itemName: { fontSize: 11, fontWeight: '600', color: '#1a1a1a', textAlign: 'center' },
  itemSub: { fontSize: 10, color: '#888', textAlign: 'center' },
  lockIcon: { fontSize: 28, marginVertical: 16 },

  shopHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14 },
  backBtn: { fontSize: 16, fontWeight: '600', color: '#1a1a1a' },
  filterRow: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  filterBtn: { backgroundColor: '#f5f5f5', borderRadius: 999, paddingHorizontal: 14, paddingVertical: 6 },
  filterBtnActive: { backgroundColor: '#C0392B' },
  filterText: { fontSize: 12, color: '#888', fontWeight: '500' },
  filterTextActive: { color: '#fff' },
  shopGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  shopCard: { width: (width - 60) / 3, backgroundColor: '#f9f9f9', borderRadius: 12, padding: 10, alignItems: 'center', position: 'relative' },
  shopCardOwned: { backgroundColor: '#f0f0f0' },
  shopItemImage: { width: 60, height: 60, marginBottom: 4, marginTop: 8 },
  shopPriceTop: { position: 'absolute', top: 8, right: 6 },
  shopPriceText: { fontSize: 10, color: '#C0392B', fontWeight: '600' },
  shopPriceCantAfford: { color: '#aaa' },
  rareBadge: { position: 'absolute', top: 8, left: 6, backgroundColor: '#C0392B', borderRadius: 4, paddingHorizontal: 4, paddingVertical: 2 },
  rareBadgeText: { fontSize: 9, color: '#fff', fontWeight: '700' },
  ownedBadge: { position: 'absolute', top: 8, right: 6, backgroundColor: '#27ae60', borderRadius: 4, paddingHorizontal: 4, paddingVertical: 2 },
  ownedBadgeText: { fontSize: 9, color: '#fff', fontWeight: '700' },
  buyBtn: { marginTop: 6, backgroundColor: '#C0392B', borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, width: '100%', alignItems: 'center' },
  buyBtnDisabled: { backgroundColor: '#ddd' },
  buyBtnText: { fontSize: 10, color: '#fff', fontWeight: '600' },

  avatarPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#fdecea',
    borderWidth: 2,
    borderColor: '#C0392B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  avatarInitial: {
    fontSize: 36,
    fontWeight: '700',
    color: '#C0392B',
  },
});