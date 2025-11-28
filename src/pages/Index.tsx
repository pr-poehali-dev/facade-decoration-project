import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "PartyPopper",
      title: "Дни рождения",
      description: "Яркое оформление для незабываемого праздника",
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/f9277491-eadd-413d-af59-9a1cd14ea82a.jpg"
    },
    {
      icon: "Heart",
      title: "Свадьбы",
      description: "Романтичный декор для особенного дня",
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/4bce07c5-4857-4cb6-9bac-ad0152c5ad89.jpg"
    },
    {
      icon: "Sparkles",
      title: "Корпоративы",
      description: "Стильное украшение деловых мероприятий",
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/348be050-bbe0-4fee-ad98-6ba75ad76be6.jpg"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/f9277491-eadd-413d-af59-9a1cd14ea82a.jpg",
      title: "День рождения"
    },
    {
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/4bce07c5-4857-4cb6-9bac-ad0152c5ad89.jpg",
      title: "Свадьба"
    },
    {
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/348be050-bbe0-4fee-ad98-6ba75ad76be6.jpg",
      title: "Корпоратив"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-primary via-secondary to-accent py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-white" size={32} />
            <h1 className="text-3xl font-bold text-white">Ира, укрась!</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-white hover:text-accent-foreground transition-colors">Услуги</a>
            <a href="#portfolio" className="text-white hover:text-accent-foreground transition-colors">Портфолио</a>
            <a href="#contact" className="text-white hover:text-accent-foreground transition-colors">Контакты</a>
          </nav>
          <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Заказать
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Превращаем праздники в сказку
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональное оформление любых мероприятий. Создаём атмосферу волшебства для ваших особенных моментов
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Icon name="Images" className="mr-2" size={20} />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in border-2 hover:border-primary">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name={service.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас?</h2>
              <div className="space-y-6">
                {[
                  { icon: "CheckCircle2", text: "Индивидуальный подход к каждому клиенту" },
                  { icon: "Clock", text: "Оперативная подготовка и установка декора" },
                  { icon: "Palette", text: "Широкий выбор стилей и цветовых решений" },
                  { icon: "ThumbsUp", text: "Гарантия качества и внимание к деталям" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-primary rounded-lg mt-1">
                      <Icon name={item.icon as any} className="text-white" size={20} />
                    </div>
                    <p className="text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl transform rotate-3"></div>
              <img 
                src="https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/348be050-bbe0-4fee-ad98-6ba75ad76be6.jpg"
                alt="Наша работа"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white text-xl font-semibold p-6">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-primary via-secondary to-accent py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Sparkles" className="mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold mb-6">Готовы украсить ваш праздник?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня, и мы создадим незабываемую атмосферу для вашего события
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (XXX) XXX-XX-XX
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать Email
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={24} />
            <p className="text-xl font-semibold">Ира, укрась!</p>
          </div>
          <p className="text-gray-400">© 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
