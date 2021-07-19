import { useState } from "react";

const languages = [
	{
		code: "en",
		name: "English"
	},
	{
		code: "pt",
		name: "Portuguese"
	}
]

const translations = {
	"en": { 
		"title":"TODO List",
		"description":"Description",
		"priority":"Priority",
		"hours":"Hours",
		"add-button":"Add Task",
		"close-button":"Close Form",
		"no-tasks-message":"No tasks to show :)",
		"credits":"Made by Sofia Romeiro",
		"save":"Save",
		"clear-message":"Delete all:"
	},
	"pt": {
		"title":"Lista de Tarefas",
		"description":"Descrição",
		"priority":"Prioridade",
		"hours":"Horas",
		"add-button":"Adicionar Tarefa",
		"close-button":"Fechar Formulário",
		"no-tasks-message":"Sem tarefas por fazer :)",
		"credits":"Feito por Sofia Romeiro",
		"save":"Guardar",
		"clear-message":"Eliminar todas:"
	}
}

const getTranslation = (lang, field) => {
	return translations[lang][field]
}

const LanguageSwitcher = () => {

	const [lang, setLanguage] = useState("en");

	

}

export default LanguageSwitcher



