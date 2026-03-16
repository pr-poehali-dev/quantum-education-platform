import Icon from "@/components/ui/icon"

const safetyPoints = [
  {
    icon: "ShieldCheck",
    title: "Клинические испытания",
    description:
      "Прошли 3 фазы клинических испытаний с участием более 400 пациентов. Нулевой уровень серьёзных побочных эффектов.",
  },
  {
    icon: "Lock",
    title: "Защита данных",
    description:
      "Нейронные данные хранятся только на устройстве. Сквозное шифрование AES-256. Никакой передачи третьим лицам.",
  },
  {
    icon: "RotateCcw",
    title: "Полная обратимость",
    description:
      "Устройство можно безопасно извлечь в любой момент. Процедура удаления занимает менее 1 часа под местной анестезией.",
  },
  {
    icon: "Activity",
    title: "Мониторинг 24/7",
    description:
      "Встроенные датчики непрерывно отслеживают состояние импланта и жизненные показатели. Уведомления врачу при отклонениях.",
  },
  {
    icon: "FileCheck",
    title: "Регуляторное одобрение",
    description:
      "Сертифицировано FDA (США) и CE (Европа) для медицинского применения. Соответствует стандартам ISO 14708.",
  },
  {
    icon: "Users",
    title: "Команда нейрохирургов",
    description:
      "Каждая имплантация выполняется сертифицированным нейрохирургом с минимум 10 годами опыта. Операций проведено: 847+.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <Icon name="ShieldCheck" size={16} className="text-red-400" />
            <span className="text-red-400 text-sm font-medium font-space-mono">Безопасность — приоритет №1</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Надёжность, проверенная наукой
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Мы разработали SynapseAI так, чтобы каждый шаг — от операции до ежедневного использования —
            был максимально безопасным и предсказуемым.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={point.icon} size={20} className="text-red-400" />
                </div>
                <h3 className="text-white font-semibold font-geist">{point.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm font-space-mono">
            Все данные о безопасности доступны в открытых публикациях на{" "}
            <span className="text-red-400">PubMed</span> и в технической документации компании
          </p>
        </div>
      </div>
    </section>
  )
}
