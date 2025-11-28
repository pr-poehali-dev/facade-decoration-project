import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", phone: "", message: "" });
    
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const services = [
    {
      icon: "Store",
      title: "День открытия",
      description: "Яркое оформление входной группы для запуска вашего бизнеса",
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/80b18071-9bfc-4966-87b5-0b6329f8fc91.jpg"
    },
    {
      icon: "Snowflake",
      title: "Новогоднее оформление",
      description: "Праздничное декорирование фасадов и витрин",
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/4b651c3b-b0bf-4735-b704-88694ab1f801.jpg"
    },
    {
      icon: "Leaf",
      title: "Осенняя тематика",
      description: "Уютное сезонное украшение в теплых тонах",
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/5f903443-b4fc-45ee-8068-4e8869633465.jpg"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/80b18071-9bfc-4966-87b5-0b6329f8fc91.jpg",
      title: "Салон красоты"
    },
    {
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/4b651c3b-b0bf-4735-b704-88694ab1f801.jpg",
      title: "Магазин к Новому году"
    },
    {
      image: "https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/5f903443-b4fc-45ee-8068-4e8869633465.jpg",
      title: "Кафе осенью"
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
              Превращаем фасады в произведения искусства
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональное декорирование зданий, витрин и входных групп. Украшаем магазины, салоны красоты и коммерческие помещения
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
                  { icon: "CheckCircle2", text: "Работаем с любыми коммерческими объектами" },
                  { icon: "Clock", text: "Быстрый монтаж и демонтаж декораций" },
                  { icon: "Palette", text: "Украшения под любой праздник и сезон" },
                  { icon: "ThumbsUp", text: "Привлекаем внимание к вашему бизнесу" }
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
                src="https://cdn.poehali.dev/projects/e1912c10-6b89-478e-b548-2187c464f785/files/80b18071-9bfc-4966-87b5-0b6329f8fc91.jpg"
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

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Icon name="Sparkles" className="mx-auto mb-6 text-primary" size={48} />
              <h2 className="text-4xl font-bold mb-6">А вы готовы к празднику?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Свяжитесь с нами сегодня, и мы создадим яркое оформление для вашего бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
                <div className="text-center mb-6">
                  <Icon name="User" className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Мария</h3>
                  <p className="text-muted-foreground">Менеджер проектов</p>
                </div>
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                    <a href="tel:+79313573080">
                      <Icon name="Phone" className="mr-2" size={20} />
                      +7 (931) 357-30-80
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10" asChild>
                    <a href="https://wa.me/79313573080" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" className="mr-2" size={20} />
                      Написать в WhatsApp
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Расскажите о вашем объекте и пожеланиях"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background min-h-[120px]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </Button>
                  {submitStatus === "success" && (
                    <p className="text-center text-green-500 font-semibold">
                      Заявка отправлена! Мария свяжется с вами в ближайшее время.
                    </p>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black/50 text-white py-8 border-t border-border">
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