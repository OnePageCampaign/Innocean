import React, { useState, useEffect, useRef } from 'react'
import * as A from '../Send/Send.style'
import { useNavigate } from 'react-router-dom'
import Letter1 from '../../assets/Letter1.png'
import Letter2 from '../../assets/Letter2.png'
import Letter3 from '../../assets/Letter3.png'
import Letter4 from '../../assets/Letter4.png'
import Letter5 from '../../assets/Letter5.png'
import { useLocation } from 'react-router-dom'
import Modal from 'react-modal'

const images = [Letter1, Letter2, Letter3, Letter4, Letter5]

const getRandomInitialImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length)
  return images[randomIndex]
}

function Send() {
  const navigate = useNavigate()
  const location = useLocation()
  const letterInputRef = useRef(null) // Ref 생성

  const [randomNickname, setRandomNickname] = useState('')
  const [letterContent, setLetterContent] = useState('')
  const [result, setResult] = useState({ text: '', error: null })
  const [recognition, setRecognition] = useState(null)
  const [isRecording, setIsRecording] = useState(false)

  const focusLetterInput = () => {
    if (letterInputRef.current) {
      letterInputRef.current.focus() // LetterInput에 포커스 설정
    }
  }

  useEffect(() => {
    const initRecognition = () => {
      //@ts-ignore
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition

      if (!SpeechRecognition) {
        console.error('SpeechRecognition이 지원되지 않습니다.')
        return null
      }

      const newRecognition = new SpeechRecognition()
      newRecognition.lang = 'ko-KR'
      newRecognition.interimResults = false
      newRecognition.maxAlternatives = 1

      return newRecognition
    }

    const speechRecognition = initRecognition()
    setRecognition(speechRecognition)
  }, [])

  const startListening = () => {
    if (!recognition) {
      setResult({ text: '', error: 'SpeechRecognition이 지원되지 않습니다.' })
      return
    }

    recognition.addEventListener('result', handleResult)
    recognition.addEventListener('error', handleError)
    recognition.start()
    setIsRecording(true)
  }

  const stopListening = () => {
    if (recognition) {
      recognition.removeEventListener('result', handleResult)
      recognition.removeEventListener('error', handleError)
      recognition.stop()
      setIsRecording(false)
    }
  }

  const handleResult = event => {
    const text = event.results[0][0].transcript
    setResult({ text, error: null })
    console.log('Recognized text:', result) // 디버깅을 위한 로그 추가
    setLetterContent(prevContent => prevContent + text)
    stopListening()
  }

  const handleError = event => {
    console.error('SpeechRecognition error:', event.error) // 디버깅을 위한 로그 추가
    setResult({
      text: '',
      error: `SpeechRecognition error: ${event.error}`,
    })
    stopListening()
  }

  useEffect(() => {
    if (location.state?.randomNickname) {
      setRandomNickname(location.state.randomNickname)
    }
  }, [location])

  const handleLetterChange = e => {
    const lines = e.target.value.split('\n')

    if (lines.length > 8) {
      lines[7] = lines[7].slice(0, 20) // 예시로 50글자 제한
      setLetterContent(lines.slice(0, 8).join('\n'))
    } else {
      setLetterContent(e.target.value)
    }
  }

  const handleRecordClick = () => {
    if (isRecording) {
      stopListening()
    } else {
      startListening()
    }
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  // Modal 스타일
  const modalStyles = {
    content: {
      width: '20rem',
      height: '12rem',
      border: '1px solid #d3d3d3', // 더 연한 회색으로 변경
      borderRadius: 15,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px',
      margin: 'auto', // 모달을 화면 중앙에 위치시킵니다
    },
  }

  return (
    <A.Wrapper>
      <A.Container>
        마음을 전해주는 <br />한 페이지를 보내주세요
        <A.CenteredContainer>
          <A.TextStyleBold>{randomNickname}</A.TextStyleBold>
          <A.TextStyleNormal>님한테 전달할 편지에요!</A.TextStyleNormal>
        </A.CenteredContainer>
        <A.LetterStyle>
          <A.LetterInput
            ref={letterInputRef}
            value={letterContent}
            onChange={handleLetterChange}
            placeholder='여기에 편지를 작성하세요...'
          />
        </A.LetterStyle>
        <A.RecordBox onClick={handleRecordClick}>
          <A.RecordIconBeforeStart isRecording={isRecording} />
        </A.RecordBox>
        <A.BackgroundContainer onClick={openModal}>
          <A.ParticipationText>
            편지 보내기 <A.ArrowIcon />
          </A.ParticipationText>
        </A.BackgroundContainer>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Confirm Send Modal'
          style={modalStyles} // 모달 스타일 적용
        >
          <A.NotificationText>알림</A.NotificationText>

          <A.MessageContainer>
            편지가 정상적으로 전달이 되었어요!
          </A.MessageContainer>

          <A.StyledDiv></A.StyledDiv>

          <A.ConfirmationText
            onClick={() => {
              navigate('/')
            }}
          >
            확인
          </A.ConfirmationText>
        </Modal>
      </A.Container>
    </A.Wrapper>
  )
}
export default Send
