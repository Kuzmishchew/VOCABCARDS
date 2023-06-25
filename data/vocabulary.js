let VOCAB_JSON = `[
	{
		"english": "accelerate",
		"russian": "ускорить"
	},
	{
		"english": "achieve",
		"russian": "достигать, добиваться, выполнять"
	},
	{
		"english": "allow",
		"russian": "позволять, допускать, разрешать"
	},
	{
		"english": "along",
		"russian": "вместе, вдоль"
	},
	{
		"english": "append",
		"russian": "добавлять"
	},
	{
		"english": "approach",
		"russian": "подход"
	},
	{
		"english": "assign",
		"russian": "назначать"
	},
	{
		"english": "assum",
		"russian": "предположить"
	},
	{
		"english": "attempt",
		"russian": "попытка"
	},
	{
		"english": "avoided",
		"russian": "избегать"
	},
	{
		"english": "capabilities",
		"russian": "возможности"
	},
	{
		"english": "capture",
		"russian": "захватывать"
	},
	{
		"english": "caveats",
		"russian": "предостережения"
	},
	{
		"english": "certain",
		"russian": "определенный"
	},
	{
		"english": "clue",
		"russian": "зацепка, ключ, улика"
	},
	{
		"english": "common",
		"russian": "общий, распространенный"
	},
	{
		"english": "confidence",
		"russian": "уверенность"
	},
	{
		"english": "conform",
		"russian": "соответствовать"
	},
	{
		"english": "consider",
		"russian": "учитывать, считать, полагать"
	},
	{
		"english": "cryptic",
		"russian": "загадочный, таинственный"
	},
	{
		"english": "culprit",
		"russian": "виновник, преступник"
	},
	{
		"english": "define",
		"russian": "определять"
	},
	{
		"english": "depend",
		"russian": "зависеть"
	},
	{
		"english": "determine",
		"russian": "определять"
	},
	{
		"english": "distinguishing",
		"russian": "отличительный, характерный"
	},
	{
		"english": "emphasize",
		"russian": "подчеркивать, придавать особое значение"
	},
	{
		"english": "encourag",
		"russian": "поощрять, поддерживать, ободрять"
	},
	{
		"english": "entire",
		"russian": "весь, целый, полный"
	},
	{
		"english": "evaluate",
		"russian": "оценивать"
	},
	{
		"english": "exactly",
		"russian": "точно, точь-в-точь"
	},
	{
		"english": "executable",
		"russian": "исполняемый"
	},
	{
		"english": "exists",
		"russian": "существовать"
	},
	{
		"english": "explanation",
		"russian": "объяснение"
	},
	{
		"english": "explicit",
		"russian": "явный"
	},
	{
		"english": "exploration",
		"russian": "исследование"
	},
	{
		"english": "expression",
		"russian": "выражение"
	},
	{
		"english": "extensively",
		"russian": "широко(использоваться)"
	},
	{
		"english": "flow",
		"russian": "поток"
	},
	{
		"english": "gain",
		"russian": "усиление, прирост"
	},
	{
		"english": "hallowed",
		"russian": "освященный(святой)"
	},
	{
		"english": "highlight",
		"russian": "выделять"
	},
	{
		"english": "immediately",
		"russian": "немедленно"
	},
	{
		"english": "implicit",
		"russian": "неявный, скрытый"
	},
	{
		"english": "improperly",
		"russian": "неправильно"
	},
	{
		"english": "infer",
		"russian": "делать вывод, выводить"
	},
	{
		"english": "insights",
		"russian": "понимание, идеи"
	},
	{
		"english": "instance",
		"russian": "пример"
	},
	{
		"english": "instead",
		"russian": "вместо"
	},
	{
		"english": "intent",
		"russian": "намерение"
	},
	{
		"english": "invaluable",
		"russian": "неоценимый, бесценный"
	},
	{
		"english": "investigate",
		"russian": "расследовать, изучать"
	},
	{
		"english": "invoke",
		"russian": "вызывать"
	},
	{
		"english": "keystrokes",
		"russian": "нажатия клавиш"
	},
	{
		"english": "least",
		"russian": "наименее"
	},
	{
		"english": "line feed",
		"russian": "перевод(перенос) строки"
	},
	{
		"english": "long-standing",
		"russian": "давний"
	},
	{
		"english": "member access operator",
		"russian": "оператор доступа к членам"
	},
	{
		"english": "merely",
		"russian": "просто, только, единственно"
	},
	{
		"english": "method invocation operator",
		"russian": "оператор вызова метода"
	},
	{
		"english": "misleading",
		"russian": "вводящий в заблуждение"
	},
	{
		"english": "observe",
		"russian": "наблюдать, заметить"
	},
	{
		"english": "obvious",
		"russian": "очевидно"
	},
	{
		"english": "occur",
		"russian": "происходить"
	},
	{
		"english": "otherwise",
		"russian": "иначе, в противном случае"
	},
	{
		"english": "perform",
		"russian": "выполнять"
	},
	{
		"english": "period",
		"russian": "точка"
	},
	{
		"english": "permanent",
		"russian": "постоянный, перманентный"
	},
	{
		"english": "precise",
		"russian": "точный"
	},
	{
		"english": "precision",
		"russian": "точность"
	},
	{
		"english": "preferred",
		"russian": "предпочтительный"
	},
	{
		"english": "prevent",
		"russian": "предотвращать, препятствовать"
	},
	{
		"english": "provide",
		"russian": "предоставлять"
	},
	{
		"english": "purposeful",
		"russian": "целеустремленный"
	},
	{
		"english": "regarding",
		"russian": " касательно, о, относительно"
	},
	{
		"english": "reinforce",
		"russian": "укреплять "
	},
	{
		"english": "remind",
		"russian": "напоминать"
	},
	{
		"english": "require",
		"russian": "требовать, нуждаться"
	},
	{
		"english": "retrieve",
		"russian": "забрать"
	},
	{
		"english": "seem",
		"russian": "казаться"
	},
	{
		"english": "similarly",
		"russian": "сходным образом, так же"
	},
	{
		"english": "simplify",
		"russian": "упрощать"
	},
	{
		"english": "snippet",
		"russian": "фрагмент"
	},
	{
		"english": "sophisticated",
		"russian": "сложный"
	},
	{
		"english": "spell-checker",
		"russian": "программа проверки орфографии"
	},
	{
		"english": "spelling",
		"russian": "написание, правописание"
	},
	{
		"english": "spot",
		"russian": "место, пятно"
	},
	{
		"english": "squiggly",
		"russian": "волнистый"
	},
	{
		"english": "subtle",
		"russian": "тонкий, утонченный"
	},
	{
		"english": "suppose",
		"russian": "предпологать"
	},
	{
		"english": "temporary",
		"russian": "временный"
	},
	{
		"english": "tempt",
		"russian": "искушать, соблазнять"
	},
	{
		"english": "throughout",
		"russian": "через, по всему"
	},
	{
		"english": "towards",
		"russian": "в направлении"
	},
	{
		"english": "unfold",
		"russian": "раскрываться"
	},
	{
		"english": "verbatim",
		"russian": "дословно"
	}
]`;

export {VOCAB_JSON};