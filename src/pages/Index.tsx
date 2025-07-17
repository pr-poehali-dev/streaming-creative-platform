import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

const StreamingApp = () => {
  const [selectedGift, setSelectedGift] = useState<string | null>(null);
  const [balance, setBalance] = useState(1500);

  const categories = [
    { id: 'all', name: 'Все', icon: 'Globe' },
    { id: 'gaming', name: 'Гейминг', icon: 'Gamepad2' },
    { id: 'music', name: 'Музыка', icon: 'Music' },
    { id: 'dance', name: 'Танцы', icon: 'Zap' },
    { id: 'talk', name: 'Общение', icon: 'MessageCircle' },
    { id: 'talent', name: 'Таланты', icon: 'Star' },
  ];

  const countries = [
    { code: 'RU', name: 'Россия', flag: '🇷🇺' },
    { code: 'US', name: 'США', flag: '🇺🇸' },
    { code: 'DE', name: 'Германия', flag: '🇩🇪' },
    { code: 'FR', name: 'Франция', flag: '🇫🇷' },
    { code: 'JP', name: 'Япония', flag: '🇯🇵' },
    { code: 'BR', name: 'Бразилия', flag: '🇧🇷' },
  ];

  const gifts = [
    { id: 'rose', name: 'Роза', price: 50, emoji: '🌹' },
    { id: 'heart', name: 'Сердце', price: 100, emoji: '💖' },
    { id: 'diamond', name: 'Бриллиант', price: 500, emoji: '💎' },
    { id: 'crown', name: 'Корона', price: 1000, emoji: '👑' },
    { id: 'rocket', name: 'Ракета', price: 2000, emoji: '🚀' },
  ];

  const streams = [
    {
      id: 1,
      title: 'Играю в Dota 2 - Покоряем ранги!',
      streamer: 'GamePro_RU',
      viewers: 1245,
      category: 'gaming',
      country: 'RU',
      thumbnail: '/placeholder.svg',
      isLive: true,
      location: 'Москва, Россия',
      language: 'Русский'
    },
    {
      id: 2,
      title: 'Танцую под хиты 2024 🎵',
      streamer: 'DanceMaster',
      viewers: 892,
      category: 'dance',
      country: 'US',
      thumbnail: '/placeholder.svg',
      isLive: true,
      location: 'Нью-Йорк, США',
      language: 'English'
    },
    {
      id: 3,
      title: 'Поём караоке с чатом!',
      streamer: 'VoiceAngel',
      viewers: 634,
      category: 'music',
      country: 'DE',
      thumbnail: '/placeholder.svg',
      isLive: true,
      location: 'Берлин, Германия',
      language: 'Deutsch'
    },
    {
      id: 4,
      title: 'Общаемся и отвечаю на вопросы',
      streamer: 'ChatMaster',
      viewers: 445,
      category: 'talk',
      country: 'FR',
      thumbnail: '/placeholder.svg',
      isLive: true,
      location: 'Париж, Франция',
      language: 'Français'
    },
  ];

  const chatMessages = [
    { id: 1, user: 'Viewer123', message: 'Привет всем!', isTranslated: false },
    { id: 2, user: 'GamerPro', message: 'Отличная игра!', isTranslated: false },
    { id: 3, user: 'MusicLover', message: 'Hello from USA!', isTranslated: true, originalMessage: 'Hello from USA!', translatedMessage: 'Привет из США!' },
    { id: 4, user: 'DanceFan', message: 'Круто танцуешь!', isTranslated: false },
  ];

  const sendGift = (giftId: string) => {
    const gift = gifts.find(g => g.id === giftId);
    if (gift && balance >= gift.price) {
      setBalance(balance - gift.price);
      setSelectedGift(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-streaming-purple via-streaming-blue to-streaming-teal">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">StreamLive</h1>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" className="text-white/80" size={16} />
                <select className="bg-black/20 text-white border border-white/20 rounded px-2 py-1 text-sm">
                  {countries.map(country => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-black/20 px-3 py-1 rounded-full">
                <Icon name="Coins" className="text-streaming-yellow" size={16} />
                <span className="text-white font-semibold">{balance}</span>
              </div>
              <Button size="sm" className="bg-streaming-coral hover:bg-streaming-coral/80 text-white">
                Пополнить
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>У</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Categories */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Категории</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant="outline"
                    size="sm"
                    className="bg-black/20 border-white/20 text-white hover:bg-white/10"
                  >
                    <Icon name={category.icon as any} className="mr-2" size={16} />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Streams Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {streams.map(stream => (
                <Card key={stream.id} className="bg-black/20 border-white/10 overflow-hidden hover:scale-105 transition-transform duration-200 animate-fade-in">
                  <div className="relative">
                    <img 
                      src={stream.thumbnail} 
                      alt={stream.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 left-2 flex items-center space-x-1">
                      <Badge className="bg-red-500 text-white">
                        <Icon name="Radio" className="mr-1" size={12} />
                        LIVE
                      </Badge>
                      <Badge className="bg-black/60 text-white">
                        <Icon name="Eye" className="mr-1" size={12} />
                        {stream.viewers}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-black/60 text-white text-xs">
                        {countries.find(c => c.code === stream.country)?.flag}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-1 line-clamp-1">{stream.title}</h3>
                    <p className="text-white/70 text-sm mb-2">{stream.streamer}</p>
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={12} />
                        <span>{stream.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Globe" size={12} />
                        <span>{stream.language}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-black/20 border-white/10 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Чат
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64 mb-4">
                  <div className="space-y-2">
                    {chatMessages.map(msg => (
                      <div key={msg.id} className="bg-white/5 p-2 rounded text-sm">
                        <span className="font-semibold text-streaming-coral">{msg.user}: </span>
                        {msg.isTranslated ? (
                          <div>
                            <span className="text-white/70 text-xs">{msg.originalMessage}</span>
                            <div className="text-white">{msg.translatedMessage}</div>
                            <Badge className="bg-streaming-yellow/20 text-streaming-yellow text-xs">
                              Переведено
                            </Badge>
                          </div>
                        ) : (
                          <span className="text-white">{msg.message}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Написать сообщение..."
                    className="bg-black/20 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button size="sm" className="bg-streaming-blue hover:bg-streaming-blue/80">
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Gifts */}
            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon name="Gift" className="mr-2" size={20} />
                  Подарки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {gifts.map(gift => (
                    <Button
                      key={gift.id}
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedGift(gift.id)}
                      className={`bg-black/20 border-white/20 text-white hover:bg-white/10 flex flex-col p-2 h-auto transition-all duration-200 ${
                        selectedGift === gift.id ? 'ring-2 ring-streaming-coral animate-pulse-gift' : ''
                      }`}
                    >
                      <span className="text-lg mb-1">{gift.emoji}</span>
                      <span className="text-xs">{gift.name}</span>
                      <span className="text-xs text-streaming-yellow">{gift.price} 💎</span>
                    </Button>
                  ))}
                </div>
                {selectedGift && (
                  <Button
                    onClick={() => sendGift(selectedGift)}
                    className="w-full bg-streaming-coral hover:bg-streaming-coral/80 text-white"
                    disabled={balance < (gifts.find(g => g.id === selectedGift)?.price || 0)}
                  >
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить подарок
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingApp;