window.onload = function main()
{
	frame.init();
	
	var week = Week.create( 9*60 + 0, 7*(1*60 + 50), 1*60 + 50);
	week.paddingTop = 28;
	week.paddingLeft = 64;
	
	var
		mon = Day.create( 1, 'Понедельник' ),
		tue = Day.create( 2, 'Вторник'     ),
		wed = Day.create( 3, 'Среда'       ),
		thu = Day.create( 4, 'Четверг'     ),
		fri = Day.create( 5, 'Пятница'     ),
		sat = Day.create( 6, 'Суббота'     );
		
	var 
		symc  = Subject.create( 'Симв.выч.', '', Subject.COMMON  ),
		exph  = Subject.create( 'Эксп.физ.', '', Subject.COMMON  ),

		pmod  = Subject.create( 'Постмод.',  '', Subject.LIBERAL ),
		phil  = Subject.create( 'Философия', '', Subject.LIBERAL ),
		eng   = Subject.create( 'Ин.яз.',    '', Subject.LIBERAL ),

		safe  = Subject.create( 'Безопасн.', '', Subject.SPECIAL ),
		exan  = Subject.create( 'Эксп.ана.', '', Subject.SPECIAL ),
		dsp   = Subject.create( 'Цифр.с.п.', '', Subject.SPECIAL ),
		nit   = Subject.create( 'Нов.и.т.',  '', Subject.SPECIAL );
		
	var 
		zhuravlev   = Teacher.create('Журавлёв А.Г.'),
		telnov      = Teacher.create('Тельнов В.И.'),
		shoshin     = Teacher.create('Шошин А.А.'),

		anisimova   = Teacher.create('Анисимова Н.К.'),
		panina      = Teacher.create('Панина Н.Л.'),
		barbashina  = Teacher.create('Барбашина Э.В.'),

		dubrov      = Teacher.create('Дубров С.В.'),
		logashenko  = Teacher.create('Логашенко И.Б.'),
		kond_suh    = Teacher.create('Кондауров, Суханов');
		
	var 
		nsu = function (aud) { return Location.create("", aud); },
		inp = function (aud) { return Location.create("ИЯФ", aud); };

	var 
		LECTURE  = Type.create('Лекция'),
		SEMINAR  = Type.create('Семинар'),
		PRACTICE = Type.create('Практикум');
	
	mon.add(Course.create(10*60 + 50, 1*60 + 35, SEMINAR,  eng,   nsu(3140), anisimova    ));
	
	tue.add(Course.create( 9*60 + 15, 1*60 + 20, PRACTICE, dsp,   nsu('ТСАНИ'), kond_suh  ));
	
	wed.add(Course.create(10*60 + 45, 1*60 + 35, LECTURE,  nit,   inp(508),  dubrov       ));
	wed.add(Course.create(18*60 + 10, 1*60 + 35, LECTURE,  pmod,  nsu(313),  panina       ));
	
	thu.add(Course.create(10*60 + 45, 3*60 + 20, LECTURE,  safe,  inp(508),  dubrov       ));
	thu.add(Course.create(14*60 + 15, 1*60 + 35, LECTURE,  exan,  inp(508),  logashenko   ));
	thu.add(Course.create(16*60 +  0, 1*60 + 35, PRACTICE, exan,  inp(508),  logashenko   ));
	thu.add(Course.create(18*60 + 10, 1*60 + 35, LECTURE,  phil,  nsu('БА'), barbashina   ));
	thu.add(Course.create(20*60 +  0, 1*60 + 35, SEMINAR,  phil,  nsu(313),  barbashina   ));

	fri.add(Course.create(14*60 + 15, 1*60 + 35, SEMINAR,  exph,  inp('20Д-322'), shoshin ));
	fri.add(Course.create(16*60 + 20, 1*60 + 35, SEMINAR,  symc,  nsu(212),  zhuravlev    ));
	fri.add(Course.create(18*60 + 10, 1*60 + 35, LECTURE,  symc,  nsu(442),  zhuravlev    ));

	sat.add(Course.create(14*60 + 30, 1*60 + 35, LECTURE,  exph,  nsu('БА'),  telnov      ));
	
	week.add(mon);
	week.add(tue);
	week.add(wed);
	week.add(thu);
	week.add(fri);
	week.add(sat);
	
	frame.add(week);
	
	frame.reshape();
	frame.mark(new Date());
	
	setTimeout(function () { setInterval(function () {frame.mark(new Date());}, 60*1000);}, (70 - (new Date()).getSeconds()) % 60);
};

window.onresize = function reshape()
{
	frame.reshape();
};
