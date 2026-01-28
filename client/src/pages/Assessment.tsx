import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * 认知能力自我评估工具
 * 帮助用户理解自己的碎片化建模能力水平
 */

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      category: "信息压缩能力",
      question: "当你看到一个陌生人时，你能多快地推断出他的大致背景和性格？",
      options: [
        { text: "需要很长时间和很多信息", score: 1 },
        { text: "需要一些时间和观察", score: 2 },
        { text: "能相对快速地做出判断", score: 3 },
        { text: "几乎立即就能看出本质", score: 4 }
      ]
    },
    {
      id: 2,
      category: "逻辑推演能力",
      question: "当别人说一句话时，你是否能推断出他们没有明说的真实意图？",
      options: [
        { text: "很难理解隐含的意思", score: 1 },
        { text: "有时能理解，有时不能", score: 2 },
        { text: "通常能理解隐含意思", score: 3 },
        { text: "几乎总能看穿真实意图", score: 4 }
      ]
    },
    {
      id: 3,
      category: "模式识别能力",
      question: "你是否能从一个人的行为模式中识别出他的核心动机？",
      options: [
        { text: "很难看出行为背后的原因", score: 1 },
        { text: "有时能看出一些模式", score: 2 },
        { text: "通常能识别出主要动机", score: 3 },
        { text: "能清晰地看出完整的动机链条", score: 4 }
      ]
    },
    {
      id: 4,
      category: "系统化思维",
      question: "你是否倾向于将复杂的情况系统化地分解和理解？",
      options: [
        { text: "更喜欢感受而不是分析", score: 1 },
        { text: "有时会尝试分析", score: 2 },
        { text: "通常会进行系统分析", score: 3 },
        { text: "自然而然地进行系统化思考", score: 4 }
      ]
    },
    {
      id: 5,
      category: "元认知能力",
      question: "你是否能观察自己如何思考，并对自己的思维过程进行反思？",
      options: [
        { text: "很少反思自己的思维", score: 1 },
        { text: "有时会反思", score: 2 },
        { text: "经常进行自我反思", score: 3 },
        { text: "持续地观察和反思自己的思维", score: 4 }
      ]
    },
    {
      id: 6,
      category: "情感理解能力",
      question: "你是否能从一个人的微妙表情或语气变化中感知他的真实情感？",
      options: [
        { text: "很难察觉微妙的情感变化", score: 1 },
        { text: "有时能察觉", score: 2 },
        { text: "通常能察觉", score: 3 },
        { text: "能清晰地感知最微妙的情感变化", score: 4 }
      ]
    },
    {
      id: 7,
      category: "冷理性思维",
      question: "在面对情感问题时，你是否能保持冷静的理性分析？",
      options: [
        { text: "容易被情感淹没", score: 1 },
        { text: "有时能保持理性", score: 2 },
        { text: "通常能保持相对理性", score: 3 },
        { text: "能进行极其冷静的理性分析", score: 4 }
      ]
    },
    {
      id: 8,
      category: "创意想象能力",
      question: "你是否能从极少的信息中想象出完整的场景或故事？",
      options: [
        { text: "需要很多信息才能想象", score: 1 },
        { text: "能想象一些场景", score: 2 },
        { text: "能相对完整地想象", score: 3 },
        { text: "能从碎片中构建完整的虚构世界", score: 4 }
      ]
    }
  ];

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const totalScore = scores.reduce((a, b) => a + b, 0);
    const averageScore = totalScore / scores.length;

    if (averageScore >= 3.5) {
      return {
        level: "第四层：系统化推演者",
        description: "你已经达到了碎片化建模的高阶水平。你能从极少的信息中推演出完整的逻辑世界。",
        percentage: 95,
        color: "from-amber-500 to-amber-600"
      };
    } else if (averageScore >= 2.8) {
      return {
        level: "第三层：元认知觉醒者",
        description: "你具有较强的元认知能力和系统化思维。你能看穿许多事物的本质。",
        percentage: 75,
        color: "from-purple-500 to-purple-600"
      };
    } else if (averageScore >= 2) {
      return {
        level: "第二层：理性思考者",
        description: "你具有良好的分析能力和逻辑思维。继续发展这些能力，你可以达到更高的层级。",
        percentage: 50,
        color: "from-blue-500 to-blue-600"
      };
    } else {
      return {
        level: "第一层：应激反应者",
        description: "你目前更多地依赖于直觉和情感反应。通过有意识的训练，你可以发展更强的分析能力。",
        percentage: 25,
        color: "from-gray-500 to-gray-600"
      };
    }
  };

  if (showResults) {
    const results = calculateResults();
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-border">
          <div className="container">
            <h1 className="serif-display text-5xl text-primary mb-4">
              你的认知评估结果
            </h1>
            <p className="text-lg text-gray-700">
              基于你的8个问题的回答，我们得出了你的认知能力评估。
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="container py-16">
          <div className="max-w-2xl mx-auto">
            {/* Level Card */}
            <div className={`bg-gradient-to-r ${results.color} rounded-lg p-12 text-white mb-8 shadow-lg`}>
              <h2 className="text-4xl font-bold mb-4">
                {results.level}
              </h2>
              <p className="text-lg opacity-90 mb-8">
                {results.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                <div
                  className={`bg-gradient-to-r ${results.color} h-full transition-all duration-1000`}
                  style={{ width: `${results.percentage}%` }}
                ></div>
              </div>
              <p className="text-white/80 text-sm mt-2">
                认知能力水平: {results.percentage}%
              </p>
            </div>

            {/* Detailed Breakdown */}
            <div className="card-deep p-8 mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                能力分析
              </h3>
              <div className="space-y-4">
                {questions.map((q, idx) => (
                  <div key={q.id} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-semibold text-sm">
                        {scores[idx]}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary">
                        {q.category}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {q.question}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="card-deep p-8 mb-8 bg-gradient-to-r from-slate-50 to-white">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                发展建议
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    继续培养你的元认知能力——观察自己如何思考
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    在日常生活中有意识地进行系统化分析
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    学习心理学和逻辑学来加强你的分析框架
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    记录你的观察和推演过程，形成自己的知识库
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white mb-4"
              >
                查看完整分析 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => {
                  setCurrentQuestion(0);
                  setScores([]);
                  setShowResults(false);
                }}
              >
                重新测试
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-12 border-b border-border">
        <div className="container">
          <h1 className="serif-display text-5xl text-primary mb-4">
            认知能力自我评估
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            通过8个问题，了解你的碎片化建模能力水平。这个评估基于心理学和认知科学的理论。
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="container py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              第 {currentQuestion + 1} 题，共 {questions.length} 题
            </span>
            <span className="text-sm font-medium text-accent">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-accent to-amber-500 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="container py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 border-border">
            {/* Category */}
            <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-accent">
                {questions[currentQuestion].category}
              </span>
            </div>

            {/* Question */}
            <h2 className="serif-display text-3xl text-primary mb-8">
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full p-4 text-left border border-border rounded-lg hover:bg-slate-50 hover:border-accent transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 group-hover:text-primary transition-colors">
                      {option.text}
                    </span>
                    <div className="w-5 h-5 rounded-full border-2 border-border group-hover:border-accent transition-colors"></div>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Skip Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => handleAnswer(2)}
              className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              跳过此题
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
