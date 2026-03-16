import Icon from "@/components/ui/icon"

const techs = [
  {
    icon: "Cpu",
    title: "Нейронный чип N1",
    description:
      "1024 электрода с разрешением 0.01 мм. Считывает сигналы в реальном времени с задержкой менее 1 мс.",
    metric: "1024",
    metricLabel: "электрода",
  },
  {
    icon: "Wifi",
    title: "Беспроводная передача",
    description:
      "Зашифрованный канал связи на частоте 5 ГГц. Передача нейронных данных без проводов и внешних разъёмов.",
    metric: "5 GHz",
    metricLabel: "частота канала",
  },
  {
    icon: "BrainCircuit",
    title: "ИИ-декодирование",
    description:
      "Нейросеть обучается на паттернах конкретного пользователя и достигает точности интерпретации 99.7%.",
    metric: "99.7%",
    metricLabel: "точность",
  },
  {
    icon: "Battery",
    title: "Автономная работа",
    description:
      "Встроенный аккумулятор с беспроводной зарядкой обеспечивает полный день работы без дискомфорта.",
    metric: "24ч",
    metricLabel: "автономность",
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Технология внутри
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            SynapseAI — это не просто имплант. Это сложная экосистема из хирургически точных компонентов,
            которые работают как единое целое.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-white/5 border border-red-500/20 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex-shrink-0">
                  <Icon name={tech.icon} size={28} className="text-red-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-orbitron text-white font-bold text-lg">{tech.title}</h3>
                    <div className="text-right">
                      <div className="text-red-400 font-bold text-xl font-orbitron">{tech.metric}</div>
                      <div className="text-gray-500 text-xs">{tech.metricLabel}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent border border-red-500/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 font-orbitron mb-2">2 мм</div>
              <div className="text-gray-300">Диаметр импланта</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 font-orbitron mb-2">&lt;1 мс</div>
              <div className="text-gray-300">Задержка отклика</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 font-orbitron mb-2">IP68</div>
              <div className="text-gray-300">Защита от влаги</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
