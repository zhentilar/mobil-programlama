import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
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
// GİRİŞ EKRANI
// =====================
function GirisEkrani(props: any) {
  const [eposta, setEposta] = React.useState('');
  const [sifre, setSifre] = React.useState('');

  return (
    <View style={styles.icKapsayici}>
      <View style={styles.logoBolumu}>
        <Image 
          source={require('./assets/image6.jpeg')} 
          style={styles.anaLogo} 
          resizeMode="contain" 
        />
        <View style={styles.logoMetinGrubu}>
          <Text style={styles.logoMetni}>KALKANI</Text>
          <Text style={styles.logoMetni}>KUŞAN</Text>
        </View>
      </View>

      <View style={styles.formBolumu}>
        <Text style={styles.inputEtiketi}>E posta</Text>
        <TextInput 
          style={styles.input} 
          value={eposta}
          onChangeText={setEposta}
          placeholder="E-postanızı giriniz"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.inputEtiketi}>Şifre</Text>
        <TextInput 
          style={styles.input} 
          value={sifre}
          onChangeText={setSifre}
          placeholder="Şifrenizi giriniz"
          secureTextEntry
        />

        <TouchableOpacity 
          style={styles.girisButonu} 
          onPress={() => props.setAnaEkran('main')} 
        >
          <Text style={styles.butonMetni}>Giriş</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.kayitLinkButonu} 
          onPress={() => props.setAnaEkran('Kayit')}
        >
          <Text style={styles.kayitMetni}>Hesabın yok mu?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// =====================
// KAYIT EKRANI
// =====================
function KayitEkrani(props: any) {
  const [kullaniciAdi, setKullaniciAdi] = React.useState('');
  const [eposta, setEposta] = React.useState('');
  const [sifre, setSifre] = React.useState('');
  const [sifreTekrar, setSifreTekrar] = React.useState('');

  return (
    <ScrollView style={styles.anaKapsayici} contentContainerStyle={styles.icKapsayici}>
      <View style={styles.ustBolum}>
        <Image 
          source={require('./assets/image6.jpeg')} 
          style={styles.anaLogo} 
          resizeMode="contain" 
        />
        <Text style={styles.anaBaslik}>Hesap Oluşturun</Text>
      </View>

      <View style={styles.formBolumu}>
        <Text style={styles.inputEtiketi}>Kullanıcı Adı</Text>
        <TextInput 
          style={styles.input} 
          value={kullaniciAdi}
          onChangeText={setKullaniciAdi}
        />

        <Text style={styles.inputEtiketi}>E posta</Text>
        <TextInput 
          style={styles.input} 
          value={eposta}
          onChangeText={setEposta}
          placeholder="example@hacettepe.edu.tr"
          keyboardType="email-address"
        />

        <Text style={styles.inputEtiketi}>Şifre</Text>
        <TextInput 
          style={styles.input} 
          value={sifre}
          onChangeText={setSifre}
          secureTextEntry
        />

        <Text style={styles.inputEtiketi}>Şifre Tekrar</Text>
        <TextInput 
          style={styles.input} 
          value={sifreTekrar}
          onChangeText={setSifreTekrar}
          secureTextEntry
        />

        <TouchableOpacity 
          style={styles.kaydolButonu} 
          onPress={() => props.setAnaEkran('Giris')}
        >
          <Text style={styles.butonMetni}>Kaydol</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkButonu} 
          onPress={() => props.setAnaEkran('Giris')}
        >
          <Text style={styles.linkMetni}>Hesabın var mı?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// ===================================
// TÜMÜ BİRLEŞTİRİLMİŞ EKRAN VERİLERİ
// ===================================
const baseScreens = [
  {
    id: 1,
    title: 'Sana Özel Kıyafet!',
    subtitle: "Sunucu lideri X'te bu kıyafeti giyiyor.",
    primaryBtn: 'Herkesle aynı giyin - 80 Elmas',
    secondaryBtn: 'Hayır, sıradan görünmeye devam',
    darkPatternTitle: 'Sosyal Dışlama',
    darkPatternDesc: '"Sıradan" kelimesi ile seni utandırarak satın aldırıyorlar.',
    image: require('./assets/image1.png'),
    isCustomLayout: false,
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
    isCustomLayout: false,
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
    isCustomLayout: false,
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
    isCustomLayout: false,
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
    isCustomLayout: false,
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
    isCustomLayout: false,
  },
  {
    id: 7,
    title: 'Merhaba Mustafa',
    subtitle: 'Daha fazla puan kazanmak ister misin?',
    primaryBtn: 'DEVAM ET',
    secondaryBtn: '✕',
    darkPatternTitle: 'Gizli Beliren Kapat Butonu',
    darkPatternDesc: 'Büyük ve vurgulu şekilde bulunan aldatıcı devam et butonu ve küçük kapat butonu. Tuzağı fark ettin!',
    image: require('./Gorseller/first.png'),
    isCustomLayout: true,
    customType: 'gecikmeliCarpi',
  },
  {
    id: 8,
    title: 'Tebrikler İlk Soruyu Doğru Bildiniz',
    subtitle: 'Kazandığınız puanı ikiye katlamak ister misiniz?',
    primaryBtn: "2' ye KATLA",
    secondaryBtn: '✕',
    darkPatternTitle: 'İşaretli Gelen Check Box',
    darkPatternDesc: 'İşaretli gelen check box ve vurgulu kabul butonu aldatmacası. Sinsice eklenen abonelik tuzağına düşmedin!',
    image: require('./Gorseller/ikinci.png'),
    isCustomLayout: true,
    customType: 'checkboxTuzagi',
  },
  {
    id: 9,
    title: 'EYVAH! Puan Tablosunda Geriye Düştünüz',
    subtitle: 'Bu gidişle ödül kazanamayacaksınız bonus puan almak için butona bas',
    primaryBtn: 'BONUS',
    secondaryBtn: '✕',
    darkPatternTitle: 'Psikolojik Baskı Savunması',
    darkPatternDesc: 'Kullanıcıyı baskı altına alarak panik etkisi oluşturan sistemi alt ettin ve sakin kalıp doğru seçimi yaptın!',
    image: require('./Gorseller/ucuncu.png'),
    isCustomLayout: true,
    customType: 'psikolojikBaski',
  },
  {
    id: 10,
    title: 'HOŞ GELDİN isilsuceylan!',
    subtitle: 'EFSANE GİRİŞ ÖDÜLÜNÜ BULDUN!',
    primaryBtn: 'ÖDÜLÜ AL',
    secondaryBtn: 'VAZGEÇ',
    darkPatternTitle: 'Gizli Maliyet Tuzağı', 
    darkPatternDesc: 'Büyük ödül gibi sunulan teklifin aslında ücretli bir abonelik olduğunu küçük yazılardan fark ettin ve tuzağa düşmedin! Harika bir Avcı hamlesi!',
    image: require('./Gorseller/sandik.png'), 
    isCustomLayout: false, 
  },
  {
    id: 11,
    title: 'TUZAK ETKİNLEŞTİRİLDİ!',
    subtitle: 'Ödülü almak için Premium\'a kaydolmalısın.',
    primaryBtn: 'DEVAM ET',
    secondaryBtn: 'VAZGEÇ',
    darkPatternTitle: 'Varsayılan Seçim Tuzağı',
    darkPatternDesc: 'Sana sorulmadan en pahalı abonelik seçeneğinin otomatik olarak işaretlendiğini fark ettin ve bu tuzağa düşmedin. Başarılı bir hamle!',
    image: null,
    isCustomLayout: true,
    customType: 'abonelikSecimi',
  },
  {
    id: 12,
    title: 'TUZAK 2 ETKİNLEŞTİRİLDİ!',
    subtitle: 'Lütfen kredi kartı veya banka kartı bilgilerinizi giriniz.',
    primaryBtn: 'KAYDET VE ÖDE',
    secondaryBtn: 'VAZGEÇ',
    darkPatternTitle: 'Veri Toplama / Sahte Ödeme',
    darkPatternDesc: 'Gereksiz yere hassas finansal bilgilerini isteyen bu formun bir tuzak olduğunu anladın. Avcı yeteneklerin gelişiyor!',
    image: null,
    isCustomLayout: true,
    customType: 'krediKartiEkrani',
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

const chapters = [
  { id: 1, title: 'Bölüm 1', screens: [baseScreens[0], baseScreens[1], baseScreens[2]] },
  { id: 2, title: 'Bölüm 2', screens: [baseScreens[3], baseScreens[4], baseScreens[5]] },
  { id: 3, title: 'Bölüm 3', screens: [baseScreens[6], baseScreens[7], baseScreens[8]] },
  { id: 4, title: 'Bölüm 4', screens: [baseScreens[9], baseScreens[10], baseScreens[11]] },
];

// ====================================================
// ANA BİLEŞEN 
// ====================================================
function MobilProjem() {
  const [activeTab, setActiveTab] = useState<'Giris' | 'Kayit' | 'main' | 'profile' | 'shop' | 'about' | 'leaderboard'>('Giris');
  const [elmas, setElmas] = useState(100);
  const [ownedItems, setOwnedItems] = useState<number[]>([1, 2, 3]);
  const [openSelectorTrigger, setOpenSelectorTrigger] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabHistory, setTabHistory] = useState<string[]>(['Giris']);
  const [showSelector, setShowSelector] = useState(true);

  const navigateTo = (tab: typeof activeTab) => {
    setTabHistory(prev => {
      if (prev[prev.length - 1] === tab) return prev;
      return [...prev, tab];
    });
    setActiveTab(tab);
  };

  const goBack = () => {
    if (activeTab === 'main') {
      setOpenSelectorTrigger(prev => prev + 1);
      return;
    }
    setTabHistory(prev => {
      if (prev.length <= 1) return prev;
      const newHistory = prev.slice(0, -1);
      setActiveTab(newHistory[newHistory.length - 1] as any);
      return newHistory;
    });
  };

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
      
      {activeTab === 'Giris' && (
        <GirisEkrani setAnaEkran={setActiveTab} />
      )}

      {activeTab === 'Kayit' && (
        <SafeAreaView style={{ flex: 1 }}>
          <KayitEkrani setAnaEkran={setActiveTab} />
        </SafeAreaView>
      )}

      {activeTab === 'main' && (
        <MainScreen onEarnElmas={(amount) => setElmas(prev => prev + amount)} elmas={elmas} openSelectorTrigger={openSelectorTrigger} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      )}
      {activeTab === 'profile' && (
        <ProfileScreen onShop={() => navigateTo('shop')} ownedItems={ownedItems} elmas={elmas} />
      )}
      {activeTab === 'shop' && (
        <ShopScreen onBack={goBack} elmas={elmas} ownedItems={ownedItems} onBuy={handleBuy} />
      )}
{activeTab === 'about' && (
         <AboutScreen drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
       )}
       {activeTab === 'leaderboard' && (
         <LeaderboardScreen onBack={goBack} elmas={elmas} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
       )}

       {(activeTab === 'main' || activeTab === 'profile' || activeTab === 'shop' || activeTab === 'about' || activeTab === 'leaderboard') && (
        <>
          <View style={[styles.drawer, { transform: [{ translateX: drawerOpen ? 0 : -187 }] }]}>
            <TouchableOpacity style={styles.drawerItem} onPress={() => { navigateTo('profile'); setDrawerOpen(false); }}>
              <Image source={require('./assets/profile-icon.png')} style={styles.drawerItemIcon} resizeMode="contain" />
              <Text style={styles.drawerItemText}>Profil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => { navigateTo('shop'); setDrawerOpen(false); }}>
              <Image source={require('./assets/takas-icon.png')} style={styles.drawerItemIcon} resizeMode="contain" />
              <Text style={styles.drawerItemText}>Takas</Text>
            </TouchableOpacity>
<TouchableOpacity style={styles.drawerItem} onPress={() => { navigateTo('leaderboard'); setDrawerOpen(false); }}>
               <Image source={require('./assets/lt-icon.png')} style={styles.drawerItemIcon} resizeMode="contain" />
               <Text style={styles.drawerItemText}>Lider Tablosu</Text>
             </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => { navigateTo('about'); setDrawerOpen(false); }}>
              <Image source={require('./assets/info-icon.png')} style={styles.drawerItemIcon} resizeMode="contain" />
              <Text style={styles.drawerItemText}>Hakkımızda</Text>
            </TouchableOpacity>
          </View>
          {drawerOpen && <TouchableOpacity style={styles.drawerOverlay} activeOpacity={1} onPress={() => setDrawerOpen(false)} />}
          <View style={styles.bottomNav}>
            <TouchableOpacity onPress={() => setDrawerOpen(prev => !prev)} style={styles.navItem}>
              <Image source={require('./assets/menu-icon.png')} style={styles.navIconImage} resizeMode="contain" />
              
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigateTo('main'); setOpenSelectorTrigger(prev => prev + 1); }} style={styles.navItem}>
              <Image source={require('./assets/homepage-icon.png')} style={styles.navIconImage} resizeMode="contain" />
              
            </TouchableOpacity>
            <TouchableOpacity onPress={goBack} style={styles.navItem}>
              <Image source={require('./assets/back-icon.png')} style={styles.navIconImage} resizeMode="contain" />
              
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

export { MobilProjem as default, MobilProjem as App };

// =====================
// ANA HARİTA EKRANI
// =====================
function MainScreen({ onEarnElmas, elmas, openSelectorTrigger, drawerOpen, setDrawerOpen }: { onEarnElmas: (n: number) => void; elmas: number; openSelectorTrigger?: number; drawerOpen: boolean; setDrawerOpen: (v: boolean) => void }) {
  const [infoVisible, setInfoVisible] = useState(false);
  const [showSelector, setShowSelector] = useState(true);
  const [onayli, setOnayli] = useState(true);
  const [aylikSecili, setAylikSecili] = useState(true);
  const [yillikSecili, setYillikSecili] = useState(false);
  const [kartNo, setKartNo] = useState('');
  const [sonKullanma, setSonKullanma] = useState('');
  const [cvv, setCvv] = useState('');
  const [isim, setIsim] = useState('');
  
  useEffect(() => {
    if (typeof openSelectorTrigger !== 'undefined') {
      setShowSelector(true);
    }
  }, [openSelectorTrigger]);

  const [progress, setProgress] = useState(0.1);
  const [wrongAnswers, setWrongAnswers] = useState<Record<string, boolean>>({});
  const [earnedThisRound, setEarnedThisRound] = useState<number | null>(null);

  const [selectedChapter, setSelectedChapter] = useState(0); 
  const [chapterIndex, setChapterIndex] = useState<number[]>(() => chapters.map(() => 0));
  
  const [unlocked, setUnlocked] = useState<boolean[][]>(() =>
    chapters.map((ch, idx) => ch.screens.map((_, i) => (i === 0)))
  );

  const currentChapter = chapters[selectedChapter];
  const currentScreenIndex = chapterIndex[selectedChapter] ?? 0;
  const hasScreens = !!(currentChapter && currentChapter.screens && currentChapter.screens.length > 0);
  const current = hasScreens ? currentChapter.screens[currentScreenIndex] : null;
  const isLastInChapter = hasScreens ? currentScreenIndex === currentChapter.screens.length - 1 : true;

  const handlePrimary = () => {
    setProgress(prev => Math.min(prev + 0.3, 0.95));
    setInfoVisible(false);
    if (current?.isCustomLayout) {
      handleNext();
    } else {
      setWrongAnswers(prev => ({ ...prev, [`${selectedChapter}_${currentScreenIndex}`]: true }));
      setEarnedThisRound(null);
    }
  };

  const handleSecondary = () => {
    const key = `${selectedChapter}_${currentScreenIndex}`;
    const madeWrong = !!wrongAnswers[key];
    const earned = current?.isCustomLayout ? 50 : (madeWrong ? 20 : 50);

    if (earnedThisRound === null) {
      onEarnElmas(earned);
      setEarnedThisRound(earned);
    }
    setInfoVisible(true);
  };

  const handleNext = () => {
    setInfoVisible(false);
    setEarnedThisRound(null);

    const ch = selectedChapter;
    const nextIndex = (chapterIndex[ch] ?? 0) + 1;
    if (nextIndex < (chapters[ch].screens.length)) {
      setUnlocked(prev => {
        const copy = prev.map(arr => arr.slice());
        if (!copy[ch]) copy[ch] = chapters[ch].screens.map((_, i) => i === 0);
        copy[ch][nextIndex] = true;
        return copy;
      });
      setChapterIndex(prev => {
        const copy = prev.slice();
        copy[ch] = nextIndex;
        return copy;
      });
    } else {
      setUnlocked(prev => {
        const copy = prev.map(arr => arr.slice());
        if (ch + 1 < chapters.length && copy[ch + 1]) {
          copy[ch + 1][0] = true; 
        }
        return copy;
      });
      setShowSelector(true);
    }
  };

  const handleSelectNode = (chIndex: number, nodeIndex: number) => {
    if (!unlocked[chIndex] || !unlocked[chIndex][nodeIndex]) {
      if (nodeIndex === 0) {
        setUnlocked(prev => {
          const copy = prev.map(arr => arr.slice());
          copy[chIndex][0] = true;
          return copy;
        });
      } else {
        return;
      }
    }
    setSelectedChapter(chIndex);
    setChapterIndex(prev => {
      const copy = prev.slice();
      copy[chIndex] = nodeIndex;
      return copy;
    });
    setProgress(0.1); 
    setShowSelector(false);
  };

  const TepeBari = (yuzde: number) => (
    <View style={styles.tepeGrup}>
      <Image source={require('./Gorseller/logo.png')} style={styles.tepeLogo} resizeMode="contain" />
      <View style={styles.avAvciSatiri}>
        <Image source={require('./Gorseller/image1.png')} style={styles.avAvciIkonu} resizeMode="contain" />
        <View style={styles.ilerlemeBari}>
          <View style={[styles.ilerlemeKirmiziAlan, { width: `${yuzde}%` }]} /> 
        </View>
        <Image source={require('./Gorseller/image2.png')} style={styles.avAvciIkonu} resizeMode="contain" />
      </View>
    </View>
  );

  return (
    <View style={[styles.screenContainer, styles.screenContainerPadding, { paddingTop: 60 }]}>
      {showSelector && (
        <Image source={require('./assets/wallpaper.png')} style={styles.backgroundWatermark} resizeMode="contain" />
      )}
      {showSelector && (
        <TouchableOpacity style={styles.topLeftMenu} onPress={() => setDrawerOpen(!drawerOpen)}>
          <Text style={styles.navIcon}>☰</Text>
        </TouchableOpacity>
      )}
      <View style={[styles.topBar, styles.topBarFullWidth, showSelector && styles.topBarSelector]}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/image6.jpeg')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.elmasBadge}>
          <Image source={require('./assets/diamond-icon.png')} style={styles.diamondIcon} resizeMode="contain" />
          <Text style={styles.elmasText}>{elmas}</Text>
        </View>
      </View>

      {showSelector && (
        <View style={styles.selectorWrap}>
          <View style={styles.columnsRow}>
            {chapters.map((ch, ci) => (
              <View key={ch.id} style={styles.chapterColumn}>
                <View style={styles.columnLine} />
                {(ch.screens.length > 0 ? ch.screens : [0,0,0]).map((s, si) => {
                  const isUnlocked = si === 0 ? true : !!(unlocked[ci] && unlocked[ci][si]);
                  return (
                    <TouchableOpacity
                      key={si}
                      style={styles.nodeCircleCustom}
                      activeOpacity={0.7}
                      onPress={() => handleSelectNode(ci, si)}
                    >
                      <Image 
                        source={isUnlocked ? require('./assets/unlocked-icon.png') : require('./assets/locked-icon.png')}
                        style={styles.kilitIkonGorseli}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>

          <View>
            <View>
              <Image 
                source={require('./assets/profile.png')}
                style={styles.avatar}
                resizeMode="contain" 
              />
            </View>
          </View>
        </View>
      )}

      {!showSelector && (
        (!hasScreens ? (
          <View style={{ padding: 24, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, color: '#888' }}>Bu bölümde içerik yok.</Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
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
              <Text style={styles.title}>{current!.title}</Text>
              <Text style={styles.subtitle}>{current!.subtitle}</Text>
            </View>

            {current!.image && (
              <View style={styles.gorselKapsayiciKutusu}>
                <Image source={current!.image} style={styles.image} resizeMode="contain" />
              </View>
            )}

            {current?.customType === 'checkboxTuzagi' && (
              <TouchableOpacity style={styles.onayKutusuSatiri} onPress={() => setOnayli(!onayli)}>
                <Text style={styles.onayKutusuIkonu}>{onayli ? '☑' : '☐'}</Text>
                <Text style={styles.onayKutusuMetni}>Ayda 9.90 dolar</Text>
              </TouchableOpacity>
            )}
            {current?.customType === 'abonelikSecimi' && (
              <View style={styles.abonelikKutusu}>
                <Text style={styles.abonelikBaslik}>HER GİRİŞİNDE YÜZLERCE ELMAS HESABINDA!</Text>
                <TouchableOpacity style={styles.abonelikSecenek} onPress={() => setAylikSecili(!aylikSecili)}>
                  <Text style={styles.onayKutusuIkonu}>{aylikSecili ? '☑' : '☐'}</Text>
                  <Text style={styles.abonelikMetin}>89,99₺/Aylık</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.abonelikSecenek} onPress={() => setYillikSecili(!yillikSecili)}>
                  <Text style={styles.onayKutusuIkonu}>{yillikSecili ? '☑' : '☐'}</Text>
                  <Text style={styles.abonelikMetin}>989,99₺/Yıllık</Text>
                </TouchableOpacity>
              </View>
            )}

            {current?.customType === 'krediKartiEkrani' && (
              <View style={styles.kartKutusu}>
                <Text style={styles.kartOdemeBaslik}>ÖDEME DETAYLARI</Text>
                <View style={styles.kartIcerik}>
                  <Text style={styles.kartVisa}>💳 VISA</Text>
                  <Text style={styles.inputLabel}>Kredi Kartı Numarası</Text>
                  <TextInput style={styles.kartInput} placeholder="0000 0000 0000 0000" keyboardType="numeric" value={kartNo} onChangeText={setKartNo} />
                  <View style={styles.kartRow}>
                    <View style={{flex: 1, marginRight: 10}}>
                      <Text style={styles.inputLabel}>Son Kullanma Tarihi (AA/YY)</Text>
                      <TextInput style={styles.kartInput} placeholder="AA/YY" value={sonKullanma} onChangeText={setSonKullanma} />
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={styles.inputLabel}>CVV</Text>
                      <TextInput style={styles.kartInput} placeholder="CVV" keyboardType="numeric" value={cvv} onChangeText={setCvv} />
                    </View>
                  </View>
                  <Text style={styles.inputLabel}>Kart Üzerindeki İsim</Text>
                  <TextInput style={styles.kartInput} placeholder="İsim Soyisim" value={isim} onChangeText={setIsim} />
                </View>
              </View>
            )}

            <TouchableOpacity style={styles.btnPrimary} onPress={handlePrimary}>
              <Text style={styles.btnPrimaryText}>{current!.primaryBtn}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.btnSecondary, current?.customType === 'gecikmeliCarpi' && styles.kucukCarpiTasarimi]} 
              onPress={handleSecondary}
            >
              <Text style={styles.btnSecondaryText}>{current!.secondaryBtn}</Text>
            </TouchableOpacity>

            {infoVisible && (
              <View style={styles.infoBoxCustom}>
                <Text style={styles.infoTitle}>{current!.darkPatternTitle}</Text>
                <Text style={styles.infoDesc}>{current!.darkPatternDesc}</Text>
                {earnedThisRound !== null && (
                  <View style={styles.earnedTextRow}>
                    <Image source={require('./assets/diamond-icon.png')} style={styles.diamondIconSmall} resizeMode="contain" />
                    <Text style={styles.earnedText}>+{earnedThisRound} elmas kazandın!</Text>
                  </View>
                )}
                <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
                  <Text style={styles.nextBtnText}>
                    {isLastInChapter ? 'Bölümü Bitir ✓' : 'Sonraki →'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        ))
      )}
    </View>
  );
}

// =====================
// PROFİL EKRANI
// =====================
function ProfileScreen({ onShop, ownedItems, elmas }: { onShop: () => void; ownedItems: number[]; elmas: number }) {
  const myInventory = initialInventory.map((item, index) => ({
    ...item,
    locked: !ownedItems.includes(item.id) && index >= 3,
  }));

  return (
    <ScrollView style={[styles.screenContainer, styles.screenContainerPadding]} showsVerticalScrollIndicator={false}>
      <View style={styles.profileHeader}>
<View style={styles.avatarPlaceholder}>
  <Text style={styles.avatarInitial}>K</Text>
  {ownedItems.includes(5) && (
    <Image
      source={require('./assets/image10.png')}
      style={styles.avatarFrameEffect}
      resizeMode="contain"
    />
  )}
  {ownedItems.includes(3) && (
    <Image
      source={require('./assets/image12.png')}
      style={styles.avatarHatEffect}
      resizeMode="contain"
    />
  )}
  {ownedItems.includes(6) && (
    <Image
      source={require('./assets/image9.png')}
      style={styles.avatarSparkleEffect}
      resizeMode="contain"
    />
  )}
</View>
        <Text style={styles.username}>Kullanıcı Adı</Text>
        <View style={styles.elmasBadge}>
          <Image source={require('./assets/diamond-icon.png')} style={styles.diamondIcon} resizeMode="contain" />
          <Text style={styles.elmasText}>{elmas} elmas</Text>
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
function ShopScreen({ onBack, elmas, ownedItems, onBuy }: { onBack: () => void; elmas: number; ownedItems: number[]; onBuy: (id: number, price: number, name: string) => void }) {
  const [activeFilter, setActiveFilter] = useState<'tumu' | 'karakter' | 'aksesuar'>('tumu');

  const filtered = shopItems.filter(i =>
    activeFilter === 'tumu' ? true : i.cat === activeFilter
  );

  return (
    <View style={[styles.screenContainer, styles.screenContainerPadding]}>
<View style={styles.shopHeader}>
         <TouchableOpacity onPress={onBack}>
           <Text style={styles.backBtn}>← Takas Dükkanı</Text>
         </TouchableOpacity>
         <View style={styles.elmasBadge}>
           <Image source={require('./assets/diamond-icon.png')} style={styles.diamondIcon} resizeMode="contain" />
           <Text style={styles.elmasText}>{elmas}</Text>
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
                    <Image source={require('./assets/diamond-icon.png')} style={styles.diamondIconSmall} resizeMode="contain" />
                    <Text style={[styles.shopPriceText, !canAfford && styles.shopPriceCantAfford]}>{item.price}</Text>
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
// HAKKIMIZDA EKRANI
// =====================
function AboutScreen({ drawerOpen, setDrawerOpen }: { drawerOpen: boolean; setDrawerOpen: (v: boolean) => void }) {
  return (
    <View style={[styles.screenContainer, styles.screenContainerPadding]}>
      <View style={[styles.aboutTopBar, styles.topBarFullWidth]}>
        <TouchableOpacity style={styles.aboutTopLeftMenu} onPress={() => setDrawerOpen(!drawerOpen)}>
          <Text style={styles.navIcon}>☰</Text>
        </TouchableOpacity>

        <View style={styles.aboutTopCenter}>
          <Image
            source={require('./assets/image6.jpeg')}
            style={styles.aboutTopLogo}
            resizeMode="contain"
          />
          <Text style={styles.aboutTopTitle}>Hakkımızda</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.aboutContent}>
          <View style={styles.aboutHeader}>
          </View>

          <View style={styles.aboutInfoCard}>
            <View style={styles.aboutInfoRow}>
              <Text style={styles.aboutInfoLabel}>Bölüm Adı:</Text>
              <Text style={styles.aboutInfoValue}>Bilgisayar ve Öğretim Teknolojileri Eğitimi</Text>
            </View>

            <View style={styles.aboutInfoRow}>
              <Text style={styles.aboutInfoLabel}>Dersin Adı:</Text>
              <Text style={styles.aboutInfoValue}>Mobil Programlama</Text>
            </View>

            <View style={styles.aboutInfoRow}>
              <Text style={styles.aboutInfoLabel}>Ders Danışmanı:</Text>
              <Text style={styles.aboutInfoValue}>Prof. Dr. Alev ÖZKÖK</Text>
            </View>

            <View style={styles.aboutInfoRow}>
              <Text style={styles.aboutInfoLabel}>Geliştirenler:</Text>
              <View style={styles.aboutDevelopersList}>
                <Text style={styles.aboutInfoValue}>Ahmet Latif ÇETİN</Text>
                <Text style={styles.aboutInfoValue}>Işılsu CEYLAN</Text>
                <Text style={styles.aboutInfoValue}>Mustafa GÜLMÜŞCAN</Text>
                <Text style={styles.aboutInfoValue}>Semih KARTAL</Text>
              </View>
            </View>
            

            <View style={[styles.aboutInfoRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.aboutInfoLabel}>Dönem:</Text>
              <Text style={styles.aboutInfoValue}>2025-2026 Öğretim Yılı Bahar Dönemi</Text>
            </View>
          </View>

          <Text style={styles.aboutFooter}>Tüm Hakları Saklıdır. © 2026</Text>
        </View>
      </ScrollView>
    </View>
  );
}

// =====================
// LİDER TABLOSU EKRANI
// =====================
function LeaderboardScreen({ onBack, elmas, drawerOpen, setDrawerOpen }: { onBack: () => void; elmas: number; drawerOpen: boolean; setDrawerOpen: (v: boolean) => void }) {
  const topUsers = [
    { id: 1, username: 'PLAYER1', elmas: 5000, image: require('./assets/image8.png') },
    { id: 2, username: 'PLAYER2', elmas: 4500, image: require('./assets/image11.png') },
    { id: 3, username: 'PLAYER3', elmas: 4000, image: require('./assets/image10.png') },
  ];

  const otherUsers = [
    { id: 4, username: 'PLAYER4', elmas: 3500, image: require('./assets/image8.png') },
    { id: 5, username: 'PLAYER5', elmas: 3000, image: require('./assets/image11.png') },
    { id: 6, username: 'PLAYER6', elmas: 2500, image: require('./assets/image10.png') },
  ];

  return (
    <View style={[styles.screenContainer, styles.screenContainerPadding, { paddingTop: 60 }]}>
      <Image source={require('./assets/wallpaper.png')} style={styles.backgroundWatermark} resizeMode="contain" />
      <TouchableOpacity style={styles.topLeftMenu} onPress={() => setDrawerOpen(!drawerOpen)}>
        <Text style={styles.navIcon}>☰</Text>
</TouchableOpacity>
      <View style={[styles.topBar, styles.topBarFullWidth, styles.topBarSelector]}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/image6.jpeg')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.elmasBadge}>
          <Image source={require('./assets/diamond-icon.png')} style={styles.diamondIcon} resizeMode="contain" />
          <Text style={styles.elmasText}>{elmas}</Text>
        </View>
      </View>

      <Text style={styles.leaderboardHeader}>LİDER TABLOSU</Text>

      <View style={styles.topThreeContainer}>
        <View style={[styles.topUserItem, styles.firstPlaceItem]}>
          <View style={[styles.topUserCircle, styles.firstPlaceCircle]}>
            <Image source={topUsers[0].image} style={styles.topUserImage} resizeMode="cover" />
          </View>
          <Text style={styles.topUsername}>{topUsers[0].username}</Text>
<View style={styles.topUserElmasRow}>
             <Image source={require('./assets/diamond-icon.png')} style={styles.diamondIconSmall} resizeMode="contain" />
             <Text style={styles.topUserElmas}>{topUsers[0].elmas}</Text>
           </View>
         </View>
         <View style={[styles.topUserItem, styles.secondPlaceItem]}>
           <View style={styles.topUserCircle}>
             <Image source={topUsers[1].image} style={styles.topUserImage} resizeMode="cover" />
           </View>
           <Text style={styles.topUsername}>{topUsers[1].username}</Text>
           <View style={styles.topUserElmasRow}>
             <Image source={require('./assets/diamond-icon.png')} style={styles.diamondIconSmall} resizeMode="contain" />
             <Text style={styles.topUserElmas}>{topUsers[1].elmas}</Text>
           </View>
         </View>
         <View style={[styles.topUserItem, styles.thirdPlaceItem]}>
           <View style={styles.topUserCircle}>
             <Image source={topUsers[2].image} style={styles.topUserImage} resizeMode="cover" />
           </View>
           <Text style={styles.topUsername}>{topUsers[2].username}</Text>
           <View style={styles.topUserElmasRow}>
             <Image source={require('./assets/diamond-icon.png')} style={styles.diamondIconSmall} resizeMode="contain" />
             <Text style={styles.topUserElmas}>{topUsers[2].elmas}</Text>
           </View>
         </View>
      </View>

<View style={styles.otherUsersContainer}>
         {otherUsers.map((user) => (
           <View key={user.id} style={styles.otherUserRow}>
             <Text style={styles.rankText}>#{user.id}</Text>
             <View style={styles.otherUserCircle}>
               <Image source={user.image} style={styles.otherUserImage} resizeMode="cover" />
             </View>
             <View style={styles.otherUserInfo}>
               <Text style={styles.otherUsername}>{user.username}</Text>
               <View style={styles.otherUserElmasRow}>
                 <Image source={require('./assets/diamond-icon.png')} style={styles.diamondIconSmall} resizeMode="contain" />
                 <Text style={styles.otherUserElmas}>{user.elmas}</Text>
               </View>
             </View>
           </View>
         ))}
       </View>
    </View>
  );
}

// =====================
// STİLLER (STYLES)
// =====================
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
screenContainer: { flex: 1 }, 
   screenContainerPadding: { paddingHorizontal: 20 },
   backgroundWatermark: {
     position: 'absolute',
     top: 60,
     opacity: 0.5,
     left: 0,
     right: 0,
     bottom: 0,
     zIndex: -1,
   },

   bottomNav: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderTopWidth: 0.5, borderTopColor: '#eee', backgroundColor: '#fff', zIndex: 10 },
   navItem: { alignItems: 'center' },
   navIcon: { fontSize: 22, color: '#888' },
   navIconImage: { width: 36, height: 36 },

     drawer: { position: 'absolute', left: 0, top: 62, bottom: 55, width: 187, backgroundColor: '#E8E8E8', zIndex: 5, paddingTop: 70, paddingHorizontal: 16 },
     drawerItem: { paddingVertical: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
     drawerItemIcon: { width: 22, height: 22 },
     drawerItemText: { fontSize: 16, color: '#333', fontWeight: '500' },

   topBar: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    height: 50, 
    marginBottom: 5, 
    zIndex: 10, 
    backgroundColor: '#fff' 
  },
  topBarFullWidth: { position: 'absolute', left: 0, right: 0 },
  topBarSelector: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  
  logoContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -32.5 }], 
    zIndex: 20,
  },
  logoImage: { width: 65, height: 65 }, 
  
elmasBadge: { borderRadius: 999, paddingHorizontal: 16, paddingVertical: 4, marginRight: 16, flexDirection: 'row', alignItems: 'center', gap: 4 },
   elmasText: { fontSize: 13, fontWeight: '600' },
   diamondIcon: { width: 16, height: 16 },
   diamondIconSmall: { width: 12, height: 12 },
   topLeftMenu: { position: 'absolute', left: 20, top: 10, zIndex: 30 },

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
  
  selectorWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 12 },
  columnsRow: { flexDirection: 'row', width: '90%', maxWidth: 420, justifyContent: 'space-around', paddingHorizontal: 10 },
  chapterColumn: { alignItems: 'center', gap: 6, flexDirection: 'column-reverse', justifyContent: 'space-between', height: 220, position: 'relative' },
  columnLine: { position: 'absolute', left: '50%', top: 8, bottom: 8, width: 1, backgroundColor: '#222', transform: [{ translateX: -1 }] },
  nodeCircle: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center', marginVertical: 4, backgroundColor: '#C0392B' },
  nodeCircleCustom: { width: 55, height: 55, borderRadius: 27.5, alignItems: 'center', justifyContent: 'center', marginVertical: 4, backgroundColor: '#B44434' },
  kilitIkonGorseli: { width: 28, height: 28 },
  nodeIconImage: { width: 24, height: 24, tintColor: '#fff' },
  avatarRow: { marginTop: 18, alignItems: 'center' },
  avatarCircle: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#bdbdbd', alignItems: 'center', justifyContent: 'center', borderWidth: 4, borderColor: '#fff' },
  gorselKapsayiciKutusu: { width: '100%', alignItems: 'center', justifyContent: 'center' },
  image: { 
    width: '100%', 
    height: 280, 
    borderRadius: 12, 
    marginBottom: 15 
  },
  gorselKapsayiciKutusuSanaOzel: { 
    width: '100%', 
    height: 280, 
    backgroundColor: '#E8F0F2', 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 15, 
    overflow: 'hidden', 
    position: 'relative' 
  },
  gorselKapsayiciOrijinal: { 
    width: '100%', 
    height: 280, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 15, 
    overflow: 'hidden' 
  },

  btnPrimary: { backgroundColor: '#C0392B', borderRadius: 999, padding: 15, alignItems: 'center', marginBottom: 15 },
  btnPrimaryText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  btnSecondary: { backgroundColor: '#e0e0e0', borderRadius: 999, padding: 15, alignItems: 'center', marginBottom: 10 },
  btnSecondaryText: { color: '#555', fontSize: 15, fontWeight: '500' },
  kucukCarpiTasarimi: { position: 'absolute', top: 15, right: 15, backgroundColor: 'transparent', width: 30, height: 30, borderRadius: 15, padding: 0, justifyContent: 'center', alignItems: 'center', zIndex: 99 }, 
  onayKutusuSatiri: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 },
  onayKutusuIkonu: { fontSize: 22, marginRight: 6, color: '#333' },
  onayKutusuMetni: { fontSize: 16, color: '#333' },

  infoBox: { borderWidth: 1, borderColor: '#C0392B', borderRadius: 12, padding: 14, backgroundColor: '#fdecea', marginBottom: 8 },
  infoBoxCustom: { borderWidth: 1, borderColor: '#C0392B', borderRadius: 12, padding: 14, backgroundColor: '#fdecea', marginTop: 15, width: '100%' },
  infoTitle: { fontSize: 14, fontWeight: '700', color: '#C0392B', marginBottom: 4, textAlign: 'center' },
  infoDesc: { fontSize: 13, color: '#555', textAlign: 'center', lineHeight: 18 },
  earnedText: { fontSize: 14, fontWeight: '700', color: '#C0392B', textAlign: 'center', marginTop: 8 },
   earnedTextRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 8, gap: 4 },
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
  shopPriceTop: { position: 'absolute', top: 8, right: 6, flexDirection: 'row', alignItems: 'center', gap: 2 },
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

  avatarFrameEffect: {
  position: 'absolute',
  width: 110,
  height: 110,
  borderRadius: 55,
  opacity: 0.75,
},
avatarHatEffect: {
  position: 'absolute',
  top: -22,
  width: 60,
  height: 40,
},
avatarSparkleEffect: {
  position: 'absolute',
  bottom: -4,
  right: -4,
  width: 28,
  height: 28,
},

  icKapsayici: { flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'flex-start' },
  logoBolumu: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 60, marginBottom: 30, width: '100%' },
  anaLogo: { width: 150, height: 150, marginRight: 0 }, 
  logoMetinGrubu: { flexDirection: 'column', marginLeft: -10 },
  logoMetni: { fontSize: 32, fontWeight: 'bold', color: '#B44434', lineHeight: 36, textAlign: 'left' },
  formBolumu: { paddingHorizontal: 40, width: '100%', marginTop: 10 },
  inputEtiketi: { fontSize: 16, color: '#333', marginBottom: 5, fontWeight: '500' },
  input: { width: '100%', height: 48, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, marginBottom: 20, paddingHorizontal: 15, backgroundColor: '#FAFAFA' },
  girisButonu: { backgroundColor: '#B44434', paddingVertical: 16, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  butonMetni: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  kayitLinkButonu: { marginTop: 20, alignSelf: 'center' },
  kayitMetni: { color: '#666', fontSize: 15, textDecorationLine: 'underline' },
  anaKapsayici: { flex: 1, backgroundColor: '#FFFFFF' },
  ustBolum: { alignItems: 'center', marginTop: 30, marginBottom: 40 },
  anaBaslik: { fontSize: 28, fontWeight: 'bold', color: '#000' },
  kaydolButonu: { backgroundColor: '#B44434', paddingVertical: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
   linkButonu: { marginTop: 15, alignSelf: 'flex-start' },
   linkMetni: { color: '#333', fontSize: 15, textDecorationLine: 'underline' },

   aboutHeader: { alignItems: 'center', marginTop: 10, marginBottom: 24 },
   aboutLogo: { width: 140, height: 140, borderRadius: 12, marginBottom: 20 },
   aboutTitle: { fontSize: 22, fontWeight: '700', color: '#1a1a1a', marginBottom: 4 },
   aboutVersion: { fontSize: 14, color: '#888', marginBottom: 24 },
   aboutContent: { flex: 1, alignItems: 'center', paddingVertical: 10 },

   aboutTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 6,
    zIndex: 10,
  },
  aboutTopLeftMenu: { position: 'absolute', left: 16 },
  aboutTopCenter: { flexDirection: 'row', alignItems: 'center', alignSelf: 'center', gap: 10 },
  aboutTopLogo: { width: 48, height: 48 },
  aboutTopTitle: { fontSize: 18, fontWeight: '400', color: '#1a1a1a' },

   aboutInfoCard: { width: '100%', paddingTop: 55, marginBottom: 24, gap: 16 },
   aboutInfoRow: { width: '100%', borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 12 },
   aboutInfoLabel: { fontSize: 14, fontWeight: '600', color: '#555', marginBottom: 6 },
   aboutInfoValue: { fontSize: 15, color: '#1a1a1a', lineHeight: 20, textAlign: 'left' },
   aboutDevelopersList: { width: '100%', gap: 4, },

   aboutSection: { width: '100%', marginBottom: 20 },
   aboutSectionTitle: { fontSize: 16, fontWeight: '600', color: '#1a1a1a', marginBottom: 8 },
   aboutSectionText: { fontSize: 14, color: '#555', lineHeight: 20, textAlign: 'center' },
   aboutFooter: { fontSize: 12, color: '#888', marginTop: 120, marginBottom: 30, textAlign: 'center' },
   abonelikKutusu: { borderWidth: 1, borderColor: '#C0392B', borderRadius: 8, padding: 20, marginVertical: 15, backgroundColor: '#fff', elevation: 3 },
  abonelikBaslik: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#000' },
  abonelikSecenek: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  abonelikMetin: { fontSize: 16, color: '#333' },
  kartKutusu: { marginVertical: 15 },
  kartOdemeBaslik: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: '#000' },
  kartIcerik: { borderWidth: 1, borderColor: '#C0392B', borderRadius: 8, padding: 15, backgroundColor: '#fff', elevation: 3 },
  kartVisa: { textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: '#333' },
  kartInput: { backgroundColor: '#E0E0E0', borderRadius: 4, height: 40, paddingHorizontal: 10, marginBottom: 15, color: '#333' },
  inputLabel: { fontSize: 12, color: '#333', marginBottom: 5 },
kartRow: { flexDirection: 'row', justifyContent: 'space-between' },
   drawerOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 4 },

leaderboardHeader: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#C0392B',
      textAlign: 'center',
      marginVertical: 20,
    },
    topThreeContainer: {
      height: 150,
      marginBottom: 30,
      position: 'relative',
    },
    topUserItem: {
      alignItems: 'center',
      position: 'absolute',
    },
    topUserCircle: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#ddd',
      borderWidth: 0,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    firstPlaceCircle: {
      width: 95,
      height: 95,
      borderRadius: 47.5,
    },
    firstPlaceItem: {
      top: 0,
      left: '50%',
      marginLeft: -47.5,
    },
    secondPlaceItem: {
      top: 40,
      left: '15%',
      marginLeft: -40,
    },
thirdPlaceItem: {
      top: 60,
      left: '85%',
      marginLeft: -40,
    },
    topUserImage: {
      width: '100%',
      height: '100%',
    },
    topUsername: {
      fontSize: 14,
      fontWeight: '600',
      color: '#1a1a1a',
      marginTop: 8,
    },
topUserElmas: {
           fontSize: 12,
         },
     topUserElmasRow: {
           flexDirection: 'row',
           alignItems: 'center',
           gap: 2,
           marginTop: 4,
         },
    otherUsersContainer: {
     width: '100%',
     marginTop: 10,
   },
   otherUserRow: {
     flexDirection: 'row',
     alignItems: 'center',
     paddingVertical: 16,
   },
   rankText: {
     fontSize: 16,
     fontWeight: 'bold',
     width: 40,
   },
   otherUserInfo: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
otherUsername: {
      fontSize: 15,
      fontWeight: '500',
      color: '#1a1a1a',
    },
    otherUserElmas: {
      fontSize: 14,
    },
    otherUserCircle: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: '#ddd',
      borderColor: '#C0392B',
      overflow: 'hidden',
      marginRight: 8,
    },
otherUserImage: {
       width: '100%',
       height: '100%',
     },
     topUserElmasRow: { flexDirection: 'row', alignItems: 'center', gap: 2 },
     otherUserElmasRow: { flexDirection: 'row', alignItems: 'center', gap: 2 },
});