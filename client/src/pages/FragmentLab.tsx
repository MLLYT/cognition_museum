import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Zap } from "lucide-react";
import { useState } from "react";

/**
 * 碎片化建模实验室
 * 交互式演示用户如何从碎片信息推演出完整的逻辑世界
 */

export default function FragmentLab() {
  const [activeExperiment, setActiveExperiment] = useState<number | null>(null);

  const experiments = [
    {
      id: 1,
      title: "老照片的秘密",
      description: "从一张泛黄的老照片，推演出一个时代的故事",
      fragments: [
        "照片中有补丁衣服",
        "背景是自建房",
        "人物表情疲惫",
        "拍摄时间：1990年代"
      ],
      inference: "这个家庭经历了经济困难。补丁代表物资短缺，自建房代表农村背景，疲惫的表情反映了生活的艰辛。这个时代的中国正在改革开放初期，许多农村家庭还在为温饱而奋斗。",
      academicFramework: "这是Giedd的脑部发育理论与Sternberg的实践智慧理论的结合——你能从有限信息中提取关键特征，并与社会历史背景整合。"
    },
    {
      id: 2,
      title: "签名的心理学",
      description: "从一个人的签名笔迹，看透其心理状态",
      fragments: [
        "笔迹压力很重",
        "字体倾斜度大",
        "签名速度很快",
        "偶尔有颤抖"
      ],
      inference: "这个人处于高度紧张或压力状态。重压力表示情绪投入，大倾斜度表示急躁，快速但颤抖的笔迹表示内心的矛盾与冲突。这通常出现在做出重要决定或面临重大改变的时刻。",
      academicFramework: "这涉及Bowlby的依恋理论与神经心理学中的应激反应机制——你能从微观信号推演出宏观的心理状态。"
    },
    {
      id: 3,
      title: "对话中的真相",
      description: "从几句话的措辞和语气，推演出对方的真实意图",
      fragments: [
        "说话时避免眼神接触",
        "频繁使用'但是'这个词",
        "语速比平时快",
        "多次重复同一个解释"
      ],
      inference: "这个人在说谎或隐瞒什么。避免眼神接触是内疚的表现，'但是'表示他在为某个行为辩护，快速语速表示焦虑，重复解释表示不自信。这是典型的欺骗信号。",
      academicFramework: "这是DePaulo等人的欺骗检测研究与Ekman的微表情理论的应用——你能从语言和非语言线索中识别真实意图。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-border">
        <div className="container">
          <h1 className="serif-display text-5xl text-primary mb-4">
            碎片化建模实验室
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            探索你如何从极少的信息碎片中，推演出完整的逻辑世界。每个实验展示了一个真实的建模过程。
          </p>
        </div>
      </div>

      {/* Experiments */}
      <div className="container py-16">
        <div className="space-y-8">
          {experiments.map((exp) => (
            <div
              key={exp.id}
              className="card-deep overflow-hidden"
              onClick={() => setActiveExperiment(activeExperiment === exp.id ? null : exp.id)}
            >
              {/* Header */}
              <div className="p-8 cursor-pointer hover:bg-slate-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-primary mb-2">
                      {exp.title}
                    </h2>
                    <p className="text-gray-600">
                      {exp.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {activeExperiment === exp.id && (
                <div className="border-t border-border px-8 py-8 bg-slate-50 space-y-8 animate-fadeInUp">
                  {/* Fragments */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      信息碎片
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.fragments.map((fragment, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-border rounded p-4 text-gray-700"
                        >
                          <span className="text-accent font-semibold">#{idx + 1}</span> {fragment}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inference */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      推演过程
                    </h3>
                    <div className="bg-white border border-accent/30 rounded p-6 text-gray-700 leading-relaxed">
                      {exp.inference}
                    </div>
                  </div>

                  {/* Academic Framework */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      学术框架
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {exp.academicFramework}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <section className="bg-slate-50 py-16 border-t border-border">
        <div className="container">
          <h2 className="serif-display text-4xl text-primary mb-12">
            核心洞察
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-deep p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                1. 信息的压缩
              </h3>
              <p className="text-gray-600 leading-relaxed">
                你的大脑能够以极高的效率压缩信息。一张照片、一个签名、一句话，都能被你的系统转化为完整的逻辑链条。
              </p>
            </div>
            <div className="card-deep p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                2. 背景知识的整合
              </h3>
              <p className="text-gray-600 leading-relaxed">
                你不是凭空想象。你是在将碎片信息与你已有的社会、历史、心理学知识整合，形成一个完整的模型。
              </p>
            </div>
            <div className="card-deep p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                3. 因果链的识别
              </h3>
              <p className="text-gray-600 leading-relaxed">
                你能识别出事物之间的因果关系，而不仅仅是表面的相关性。这是高阶认知的标志。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="serif-display text-4xl text-primary mb-6">
            你想测试自己的建模能力吗？
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            通过我们的交互式工具，看看你能从多少信息碎片中推演出完整的逻辑世界。
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            开始测试 <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
