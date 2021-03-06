import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AvaliandoAprendizado from '@/components/AvaliandoAprendizado'
import AvisoInicial from '@/components/AvisoInicial'
import ProfessorInicial from '@/components/ProfessorInicial'
import DiarioDeClasse from '@/components/DiarioDeClasse'
import DuvidaAluno from '@/components/DuvidaAluno'
import ResultadoAvaliacaoAula from '@/components/ResultadoAvaliacaoAula'
import DescricaoAula from '@/components/DescricaoAula'
import Avisotermino from '@/components/Avisotermino'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/avaliando-aprendizado',
      name: 'AvaliandoAprendizado',
      component: AvaliandoAprendizado
    },
    {
      path: '/aviso-inicial',
      name: 'AvisoInicial',
      component: AvisoInicial
    },
    {
      path: '/professor-inicial',
      name: 'ProfessorInicial',
      component: ProfessorInicial
    },
    {
      path: '/diario-de-classe',
      name: 'DiarioDeClasse',
      component: DiarioDeClasse
    },
    {
      path: '/duvida-aluno',
      name: 'DuvidaAluno',
      component: DuvidaAluno
    },
    {
      path: '/resultado-avaliacao-aula',
      name: 'ResultadoAvaliacaoAula',
      component: ResultadoAvaliacaoAula
    },   
    {
      path: '/descricao-aula',
      name: 'DescricaoAula',
      component: DescricaoAula
    },
    {
      path: '/aviso-termino',
      name: 'Avisotermino',
      component: Avisotermino
    }
  ]
})
