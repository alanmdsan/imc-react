import { useState } from 'react'

function App() {
  let [weight, setWeight] = useState(0)
  let [height, setHeight] = useState(0)
  let [IMC, setIMC] = useState(0)

  const calcIMC = () => {
    if (weight > 0 && height > 0) {
      const unrounded = weight / (height * height)
      setIMC(unrounded.toFixed(2))
    } else {
      setIMC(0)
      alert('Preencha os valores corretamente!')
    }
  }

  const firstLayer = () => {
    return IMC <= 18.5 ? 'selected' : ''
  }

  const secondLayer = () => {
    return IMC > 18.5 && IMC <= 24.9 ? 'selected' : ''
  }

  const thirdLayer = () => {
    return IMC > 24.9 && IMC <= 29.9 ? 'selected' : ''
  }

  const fourthLayer = () => {
    return IMC > 29.9 && IMC <= 34.9 ? 'selected' : ''
  }

  const fifthLayer = () => {
    return IMC > 34.9 && IMC <= 39.9 ? 'selected' : ''
  }

  const sixthLayer = () => {
    return IMC > 39.9 ? 'selected' : ''
  }

  return (
    <div className='container'>
      <h1>Calcule seu IMC</h1>

      <div className='input-box'>
        <div className='input-weight'>
          <h2>Digite seu peso (kg)</h2>
          <input type="number" maxLength='4' onChange={e => setWeight(parseInt(e.target.value))} />
        </div>
        <div className='input-height'>
          <h2>Digite sua altura (m)</h2>
          <input type="number" maxLength='4' onChange={e => setHeight(parseFloat(e.target.value))} />
        </div>
      </div>
      
      <button type="button" onClick={calcIMC}>Calcular</button>

      {IMC > 0 && 
      <div className='result'>
        <div className='result-header'>
          <h1>seu IMC é:</h1>
          <span className='result-number'>{IMC}</span>
        </div>

        <div className='result-grid'>
          
          <span className={firstLayer()}>18,5 ou menos</span>
          <span className={secondLayer()}>Entre 18,6 e 24,9</span>
          <span className={thirdLayer()}>Entre 25,0 e 29,9</span>
          <span className={fourthLayer()}>Entre 30,0 e 34,9</span>
          <span className={fifthLayer()}>Entre 35,0 e 39,9</span>
          <span className={sixthLayer()}>Acima de 40,0</span>

          <span className={firstLayer()}>
            <strong>Abaixo do normal</strong>
          </span>
          <span className={secondLayer()}>
            <strong>Normal</strong>
          </span>
          <span className={thirdLayer()}>
            <strong>Sobrepeso</strong>
          </span>
          <span className={fourthLayer()}>
            <strong>Obesidade grau I</strong>
          </span>
          <span className={fifthLayer()}>
            <strong>Obesidade grau II</strong>
          </span>
          <span className={sixthLayer()}>
            <strong>Obesidade grau III</strong>
          </span>

          <span className={firstLayer()}>
            Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.
          </span>
          <span className={secondLayer()}>
            Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.
          </span>
          <span className={thirdLayer()}>
            Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.
          </span>
          <span className={fourthLayer()}>
            Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.
          </span>
          <span className={fifthLayer()}>
            Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.
          </span>
          <span className={sixthLayer()}>
            Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.
          </span>

        </div>
      </div>
      }

    </div>
  )
}

export default App
