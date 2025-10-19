import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'pricing', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: 'Store',
      title: 'День открытия',
      description: 'Яркое оформление входной группы для запуска вашего бизнеса',
      color: 'bg-gradient-to-br from-primary/20 to-accent/20'
    },
    {
      icon: 'Snowflake',
      title: 'Новогоднее оформление',
      description: 'Праздничное декорирование фасадов и витрин',
      color: 'bg-gradient-to-br from-secondary/20 to-primary/20'
    },
    {
      icon: 'Leaf',
      title: 'Осенняя тематика',
      description: 'Уютное сезонное украшение в теплых тонах',
      color: 'bg-gradient-to-br from-accent/20 to-secondary/20'
    },
    {
      icon: 'Sparkles',
      title: 'Праздничные события',
      description: 'Индивидуальное оформление под любое мероприятие',
      color: 'bg-gradient-to-br from-tertiary/20 to-accent/20'
    }
  ];

  const pricing = [
    { service: 'Консультация и замер', price: 'Бесплатно' },
    { service: 'Базовое оформление витрины', price: 'от 15 000 ₽' },
    { service: 'Украшение входной группы', price: 'от 25 000 ₽' },
    { service: 'Комплексное декорирование фасада', price: 'от 50 000 ₽' },
    { service: 'Новогоднее оформление (пакет)', price: 'от 35 000 ₽' },
    { service: 'Индивидуальный проект', price: 'По запросу' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DecorPro
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'pricing', label: 'Прайс' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Превращаем фасады в произведения искусства
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональное декорирование зданий, витрин и входных групп для вашего бизнеса
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contacts')}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 text-lg px-8"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Заказать консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-2 hover:bg-primary/5 transition-all hover:scale-105 text-lg px-8"
              >
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Превращаем обычные фасады в яркие произведения искусства</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { url: 'https://cdn.poehali.dev/files/5417da04-b9f0-4aaf-ab87-a996c4b5bfa1.jpg', title: 'Осеннее оформление', desc: 'Уютная входная группа' },
              { url: 'https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/44520b0e-a8a6-42b3-8b89-3446212a4164.jpg', title: 'Новогодний декор', desc: 'Праздничная витрина' },
              { url: 'https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/4bb51229-9daf-43e6-b740-80d05a68c85d.jpg', title: 'День открытия', desc: 'Яркое торжество' },
              { url: 'https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/5e2fa481-ef74-430e-8d3d-dd300eb02f43.jpg', title: 'Салон красоты', desc: 'Элегантный стиль' }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-3">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-white/90">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-primary/5 to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Создаем уникальное оформление для любого события и сезона
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-6 transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer hover:scale-105 ${service.color}`}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Building2', title: 'Магазины', desc: 'Привлекаем внимание покупателей' },
              { icon: 'Scissors', title: 'Салоны красоты', desc: 'Создаем стильную атмосферу' },
              { icon: 'Briefcase', title: 'Офисные центры', desc: 'Профессиональный имидж' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-background to-muted/30 transition-all hover:scale-105">
                <Icon name={item.icon as any} size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены на наши услуги</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden border-2">
              <div className="divide-y">
                {pricing.map((item, index) => (
                  <div 
                    key={index}
                    className="p-6 flex justify-between items-center hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                      <span className="font-medium">{item.service}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl text-center">
              <Icon name="Gift" size={40} className="mx-auto mb-3 text-primary" />
              <p className="text-lg font-semibold mb-2">Специальное предложение</p>
              <p className="text-muted-foreground">При заказе комплексного оформления — скидка 15%</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Обсудим ваш проект и подберем лучшее решение</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" className="h-12" />
                </div>
                <div>
                  <Input type="tel" placeholder="Телефон" className="h-12" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="h-12" />
                </div>
                <div>
                  <Textarea placeholder="Опишите ваш проект" rows={4} />
                </div>
                <Button className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
            
            <div className="space-y-6">
              <Card className="p-6 border-2 transition-all hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-2 transition-all hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@decorpro.ru</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-2 transition-all hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Время работы</h4>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br/>Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 DecorPro. Превращаем фасады в произведения искусства</p>
        </div>
      </footer>
    </div>
  );
}