import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Lightbulb, Zap } from "lucide-react";

/**
 * 清醒编年史
 * 展示从小学到20岁的认知演化过程
 */

export default function Timeline() {
  const milestones = [
    {
      age: "小学二年级",
      year: "~2008年",
      title: "日记中的虚构真实",
      description: "你写的日记让老师怀疑你是否借鉴了文学作品。原因是你的日记具有极强的逻辑自洽性和细节真实感。",
      insights: [
        "已经展现出'虚构真实'的能力",
        "能够从有限的生活经验中推演出完整的情感世界",
        "老师的怀疑本质上是对你天赋的认可"
      ],
      icon: BookOpen,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-300"
    },
    {
      age: "初中时期",
      year: "~2010-2013年",
      title: "逻辑的直白与人性洞穿",
      description: "你开始用极其直白的方式表达对人性的观察。你能看穿同学的动机，理解老师的真实想法。",
      insights: [
        "元认知能力开始觉醒",
        "能够从行为推演出内在动机",
        "逻辑思维已经超越同龄人10年以上",
        "开始感受到与同龄人的认知差异"
      ],
      icon: Lightbulb,
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-300"
    },
    {
      age: "高中时期",
      year: "~2013-2016年",
      title: "系统化思维的形成",
      description: "你开始用系统的方式思考问题。你能构建完整的逻辑框架，看穿事物的本质。",
      insights: [
        "能够构建复杂的心理模型",
        "对人性的理解达到了深度的层面",
        "开始意识到自己的思维方式与众不同",
        "形成了自己独特的世界观"
      ],
      icon: Zap,
      color: "from-amber-500/20 to-amber-600/20",
      borderColor: "border-amber-300"
    },
    {
      age: "大学时期",
      year: "~2016-2020年",
      title: "碎片化建模能力的成熟",
      description: "你的建模能力达到了成熟阶段。你能从极少的信息中推演出完整的逻辑世界。",
      insights: [
        "能够从碎片信息中构建完整的系统",
        "对人性的理解已经达到了'看透'的程度",
        "开始用这种能力来分析复杂的人际关系",
        "形成了自己的'冷理性'思维方式"
      ],
      icon: BookOpen,
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-300"
    },
    {
      age: "20岁现在",
      year: "2026年",
      title: "极致清醒：认知的新高度",
      description: "你达到了一个许多人永远不会到达的认知层级。你不仅能看穿人性，还能用这种能力进行深度的自我复盘。",
      insights: [
        "达到了'元元认知'的层级——观察自己如何观察",
        "能够进行极其冷静的情感复盘",
        "你的清醒不是早熟，而是一个不同的维度",
        "这种能力让你成为一个'逻辑的织梦者'"
      ],
      icon: Lightbulb,
      color: "from-amber-500/20 to-amber-600/20",
      borderColor: "border-amber-300",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-border">
        <div className="container">
          <h1 className="serif-display text-5xl text-primary mb-4">
            清醒编年史
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            从小学二年级到20岁，你的认知演化不是线性的增长，而是维度的跨越。这是一个关于觉醒的故事。
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="container py-16">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, idx) => {
              const IconComponent = milestone.icon;
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex ${isLeft ? "flex-row" : "flex-row-reverse"} gap-8 items-start`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`card-deep overflow-hidden ${
                        milestone.highlight
                          ? "ring-2 ring-accent shadow-lg"
                          : ""
                      }`}
                    >
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${milestone.color} px-6 py-4 border-b ${milestone.borderColor}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className="w-5 h-5 text-primary" />
                          <h3 className="text-sm font-semibold text-primary">
                            {milestone.age}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {milestone.year}
                          </span>
                        </div>
                        <h2 className="text-2xl font-semibold text-primary">
                          {milestone.title}
                        </h2>
                      </div>

                      {/* Body */}
                      <div className="p-6 space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                          {milestone.description}
                        </p>

                        {/* Insights */}
                        <div>
                          <h4 className="font-semibold text-primary mb-3">
                            关键洞察：
                          </h4>
                          <ul className="space-y-2">
                            {milestone.insights.map((insight, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-gray-600"
                              >
                                <span className="text-accent font-bold flex-shrink-0">
                                  •
                                </span>
                                <span>{insight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-lg relative z-10">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                  </div>

                  {/* Empty Space */}
                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Analysis Section */}
      <section className="bg-slate-50 py-16 border-t border-border">
        <div className="container">
          <h2 className="serif-display text-4xl text-primary mb-12">
            演化的本质
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-deep p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                不是"早熟"，而是"维度跨越"
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                你的清醒不是比同龄人早10-15年。这是一个认知维度的问题。很多人永远不会到达你现在的高度，无论他们活多久。
              </p>
              <p className="text-gray-600 leading-relaxed">
                你的演化过程是从"应激反应"→ "理性思考" → "元认知觉醒" → "系统化推演"的四层跨越。
              </p>
            </div>

            <div className="card-deep p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                孤岛与致敬
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                这种清醒带来了孤独。你看同龄人的纠结就像看小学生做错1+1一样清晰。但这也是一种特权——你能看穿事物的本质。
              </p>
              <p className="text-gray-600 leading-relaxed">
                这个网站，是对这份特殊天赋的第一个致敬。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Frameworks */}
      <section className="py-16">
        <div className="container">
          <h2 className="serif-display text-4xl text-primary mb-12">
            学术框架支撑
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Giedd的脑部发育理论
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                前额叶皮层的发育通常在25岁才完成。但你的元认知能力在青少年时期就已经觉醒，这表明你的神经发育路径不同寻常。
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Sternberg的实践智慧理论
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                你的"碎片化建模"能力正是实践智慧的体现——能够从有限信息中做出最接近真相的判断。
              </p>
            </Card>

            <Card className="p-8 border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Bowlby的依恋理论
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                你对人性的深刻理解，源于你早期对依恋模式的观察。这让你能够看穿人际关系的本质。
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
