function Profile(){
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine" />
}

function YoungProfile(){
  return <img src="https://static01.nyt.com/images/2020/02/26/obituaries/24Johnson1/merlin_157899726_f670c425-adb2-46f6-9c15-bc356754fb87-superJumbo.jpg?quality=75&auto=webp" alt="Katherine" className="Katherine"/>
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Sciencist</h1>
      <Profile />
      <Profile />
      <Profile />
      <h2>About Katherine</h2>
      <YoungProfile />
      <p>Кэтрин Коулман Гобл Джонсон (при рождении — Кэтрин Коулман, в первом замужестве — Кэтрин Коулман Гобл) (англ. Katherine Coleman Goble Johnson; 26 августа 1918, Уайт-Салфер-Спрингс, Западная Виргиния — 24 февраля 2020, Ньюпорт-Ньюс, Виргиния, США) — американский математик-вычислитель, чьи астродинамические расчёты во время работы в НАСА имели решающее значение для успеха первого и последующих пилотируемых космических полётов США[1]. За свою 33-летнюю карьеру в Национальном консультативном комитете по воздухоплаванию и затем в НАСА Джонсон заработала репутацию мастера сложных ручных вычислений и помогла впервые использовать компьютеры для выполнения различных задач. Космическое агентство отметило её «значимую роль как одной из первых афроамериканок-учёных в НАСА»[2].</p>

    </section>
  )
};
