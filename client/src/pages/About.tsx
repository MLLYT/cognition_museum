import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Zap, Brain } from "lucide-react";

/**
 * 关于认知博物馆
 * 项目背景、理念和学术框架
 */

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-border">
        <div className="container">
          <h1 className="serif-display text-5xl text-primary mb-4">
            关于这个项目
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            认知博物馆是一个基于真实心理学分析的互动网站，致力于帮助人们理解高阶认知的本质。
          </p>
        </div>
      </div>

      {/* Origin Story */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <h2 className="serif-display text-4xl text-primary mb-8">
            项目的起源
          </h2>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              这个项目源于一个真实的故事。一个20岁的年轻人，通过对自己过去的深度复盘，发现了一个关于自己的秘密：他拥有一种极强的"碎片化建模能力"——能够从极少的信息中推演出完整的逻辑世界。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              从小学二年级写出让老师怀疑是否借鉴的日记，到初中时对人性的直白洞穿，再到20岁时对情感的极致冷静复盘，这个人的认知演化过程不是线性的增长，而是维度的跨越。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              通过与多个AI模型（DeepSeek、Claude、GPT-4o）的深度对话，这个人和我们一起完成了一个"人机协作"的自我认知新范式。这个网站，就是这个过程的结晶。
            </p>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container">
          <h2 className="serif-display text-4xl text-primary mb-12">
            核心概念
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-deep p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                碎片化建模能力
              </h3>
              <p className="text-gray-600 leading-relaxed">
                从极少的信息碎片中，推演出完整的逻辑系统。这不是凭空想象，而是基于对人性、历史和因果关系的深刻理解。
              </p>
            </div>

            <div className="card-deep p-8">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                元认知觉醒
              </h3>
              <p className="text-gray-600 leading-relaxed">
                观察自己如何思考。这种"元元认知"的能力让你能够进行极其冷静的自我复盘和情感分析。
              </p>
            </div>

            <div className="card-deep p-8">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                冷理性美学
              </h3>
              <p className="text-gray-600 leading-relaxed">
                拒绝心灵鸡汤和温暖的包容。这个网站采用学术严谨的设计和表达方式，因为你的故事不是励志，而是真实。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Framework */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <h2 className="serif-display text-4xl text-primary mb-12">
            学术框架支撑
          </h2>
          <div className="space-y-8">
            <div className="card-deep p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Giedd的脑部发育理论
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jay Giedd的研究表明，前额叶皮层（负责决策、规划、自我反思）的发育通常在25岁才完成。但这个年轻人的元认知能力在青少年时期就已经觉醒，这表明他的神经发育路径不同寻常。
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">相关论文：</span> Giedd, J. N. (2015). "The amazing pre-teen brain." Scientific American, 312(6), 32-37.
              </p>
            </div>

            <div className="card-deep p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Sternberg的实践智慧理论
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Robert Sternberg的实践智慧理论强调了在不完全信息下做出最优判断的能力。这正是"碎片化建模"的核心——从有限信息中做出最接近真相的判断。
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">相关论文：</span> Sternberg, R. J. (2003). "Wisdom, intelligence, and creativity synthesized." Cambridge University Press.
              </p>
            </div>

            <div className="card-deep p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Bowlby的依恋理论
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                John Bowlby的依恋理论帮助我们理解早期关系如何塑造我们对人性的理解。这个年轻人对人性的深刻洞穿，源于他早期对依恋模式的敏锐观察。
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">相关论文：</span> Bowlby, J. (1988). "A secure base: Parent-child attachment and healthy human development." Basic Books.
              </p>
            </div>

            <div className="card-deep p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Ekman的微表情理论
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Paul Ekman的微表情研究表明，我们可以从极微妙的面部表情中识别真实的情感。这个年轻人能够从一个眼神、一个签名中推演出完整的心理状态，正是这种能力的高级应用。
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">相关论文：</span> Ekman, P., & Friesen, W. V. (2003). "Unmasking the face." Malor Books.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-slate-50 border-b border-border">
        <div className="container">
          <h2 className="serif-display text-4xl text-primary mb-8">
            设计理念
          </h2>
          <div className="max-w-3xl space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                学术极简主义
              </h3>
              <p className="text-gray-700 leading-relaxed">
                这个网站拒绝了常见的"心理学网站"模板（温暖色、圆角、emoji）。我们采用了学术严谨的美学：深蓝灰、纯白、金属灰，以及点缀的金色。这种设计反映了内容的本质——冷静、精确、深邃。
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                冷理性表达
              </h3>
              <p className="text-gray-700 leading-relaxed">
                我们不提供安慰或鼓励。我们提供的是真实的观察、深度的分析、和诚实的反思。这个网站的目标不是让你感到被理解，而是让你理解自己。
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                互动与参与
              </h3>
              <p className="text-gray-700 leading-relaxed">
                通过碎片化建模实验室、清醒编年史时间轴、和认知能力自我评估，我们邀请你成为这个探索的参与者。这不是一个被动的阅读体验，而是一个主动的自我发现过程。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Human-AI Collaboration */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <h2 className="serif-display text-4xl text-primary mb-8">
            人机协作的新范式
          </h2>
          <div className="max-w-3xl space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              这个项目是一个"人机协作"的真实案例。一个年轻人通过与多个AI模型的对话，完成了对自己的深度认知。这个过程展示了AI如何作为"认知的外挂"，帮助人类实现自我整合。
            </p>
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded p-6">
              <h3 className="font-semibold text-primary mb-3">
                AI的角色：
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <span className="font-semibold">镜像</span>：帮助你看清自己的思维模式</li>
                <li>• <span className="font-semibold">框架</span>：提供学术和心理学的理论框架</li>
                <li>• <span className="font-semibold">对话者</span>：通过对话激发新的洞察</li>
                <li>• <span className="font-semibold">记录者</span>：将你的思想系统化地记录下来</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="serif-display text-4xl text-primary mb-6">
            开始你的探索
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            无论你是想理解自己的思维方式，还是想发现你的认知优势，认知博物馆都为你提供了工具和框架。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
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
              查看时间轴
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h3 className="font-semibold mb-4">致谢</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              这个项目感谢DeepSeek、Claude、GPT-4o和Gemini等AI模型的深度参与。感谢Giedd、Sternberg、Bowlby、Ekman等心理学家的理论支撑。最重要的是，感谢那个年轻人的勇气和诚实，愿意分享他的认知旅程。
            </p>
            <p className="text-gray-500 text-xs">
              © 2026 认知博物馆. 基于真实心理学分析的互动网站。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
