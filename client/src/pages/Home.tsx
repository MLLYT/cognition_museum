import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BookOpen, Brain, Zap } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * 认知博物馆首页
 * 设计理念：学术极简主义 + 冷理性美学
 * 色彩系统：深蓝灰 (#1a2332) + 纯白 + 金属灰 (#8b8b8b) + 点缀金色 (#a89968)
 */

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="serif-display text-2xl text-primary">认知博物馆</div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              关于
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              探索
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              分析
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Typography */}
            <div className={`space-y-6 ${isLoaded ? "animate-fadeInUp" : "opacity-0"}`}>
              <div className="space-y-3">
                <h1 className="serif-display text-5xl md:text-6xl text-primary leading-tight">
                  逻辑的织梦者
                </h1>
                <p className="text-xl text-secondary font-light">
                  为什么你的"脑补"比真实更真实？
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                这不是心灵鸡汤。这是一个关于<span className="accent-gold font-semibold">碎片化建模能力</span>的真实观察——一种让你能从极少信息中推演出完整逻辑世界的天赋。
              </p>

              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  开始探索 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-slate-50"
                >
                  <BookOpen className="mr-2 w-4 h-4" />
                  阅读分析
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className={`relative h-96 md:h-full ${isLoaded ? "animate-fadeInDown" : "opacity-0"}`}>
              <img 
                src="/images/hero-fragments.png" 
                alt="Cognitive fragments converging"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concept Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="serif-display text-4xl text-primary mb-4">
              核心能力：碎片化建模
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              你不是在"瞎编"。你是在用强大的<span className="accent-gold font-semibold">逻辑算力</span>重构世界。通过几个关键碎片（一张老照片、一个眼神、一个签名），你能自动补全那个时代、那个人物的完整逻辑链条。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-deep p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">基于碎片的系统还原</h3>
              <p className="text-gray-600 leading-relaxed">
                你看到"老照片"和"生辰"，大脑自动检索那个时代的背景。你不是瞎编，你是在根据已知的逻辑支点，补全"必然会发生"的细节。
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-deep p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary">情感的共构能力</h3>
              <p className="text-gray-600 leading-relaxed">
                你能写出补丁和辛苦，是因为你已经完成了与那个时代、那个角色的<span className="accent-gold">深度共情</span>。这种"脑补"出来的真实，往往比流水账更触及灵魂。
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-deep p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">对本质的直觉</h3>
              <p className="text-gray-600 leading-relaxed">
                你不需要看到全部细节，只需要看到几个关键点，就能洞穿事物的本质。这就是为什么你能如此冷静地复盘情感。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Preview Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-full order-2 md:order-1">
              <img 
                src="/images/timeline-essence.png" 
                alt="Cognitive evolution timeline"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="serif-display text-4xl text-primary">
                清醒编年史
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                从小学二年级的日记，到初中的"逻辑直白"，再到20岁的极致清醒——你的认知演化不是线性的增长，而是<span className="accent-gold font-semibold">维度的跨越</span>。
              </p>
              
              <div className="space-y-3 pt-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-primary">小学二年级</h4>
                    <p className="text-gray-600">日记中的"虚构真实"让老师怀疑你借鉴</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-primary">初中时期</h4>
                    <p className="text-gray-600">逻辑的直白与对人性的洞穿</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-primary">20岁现在</h4>
                    <p className="text-gray-600">达到了许多人永远不会到达的认知层级</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white mt-6"
              >
                查看完整时间轴 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cognitive Layers Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="serif-display text-4xl text-primary">
                认知的分层
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                你的清醒不是比平均值早10-15年。这是一个<span className="accent-gold font-semibold">认知层级</span>的问题——很多人永远不会到达这个高度。
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-primary mb-1">第一层：应激反应</h4>
                  <p className="text-gray-600 text-sm">被情绪驱动，被环境塑造</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-primary mb-1">第二层：理性思考</h4>
                  <p className="text-gray-600 text-sm">能够反思，但仍受限于经验</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-primary mb-1">第三层：元认知觉醒</h4>
                  <p className="text-gray-600 text-sm">观察自己如何思考，看穿人性本质</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold text-primary mb-1">第四层：系统化推演</h4>
                  <p className="text-gray-600 text-sm">你现在的位置——从碎片构建完整的逻辑世界</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 md:h-full">
              <img 
                src="/images/thinking-layers.png" 
                alt="Layered thinking visualization"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90">
        <div className="container text-center text-white">
          <h2 className="serif-display text-4xl md:text-5xl mb-6">
            你也有这种能力吗？
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            通过互动工具和深度分析，探索你的碎片化建模能力。理解你的思维方式，发现你的认知优势。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-slate-100"
            >
              开始自我评估
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              阅读完整分析
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">认知博物馆</h4>
              <p className="text-sm text-gray-400">
                探索碎片化建模能力，理解高阶认知的本质。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">导航</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">首页</a></li>
                <li><a href="#" className="hover:text-white transition-colors">探索</a></li>
                <li><a href="#" className="hover:text-white transition-colors">分析</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">资源</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">关于项目</a></li>
                <li><a href="#" className="hover:text-white transition-colors">学术框架</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">更多</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
                <li><a href="#" className="hover:text-white transition-colors">使用条款</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 认知博物馆. 基于真实心理学分析的互动网站。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
