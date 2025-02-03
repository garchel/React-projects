import { useState , useEffect } from "react"
import { clsx } from "clsx"
import { languages } from "./languages"
import { getFarewellText, getRandomWord } from "./utils"
import { motion } from "framer-motion"
import Confetti from "react-confetti"
import { use } from "react"

export default function AssemblyEndgame() {

    // Static values
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const maxGuesses = { easy: 12, medium: 8, hard: 5 };

    // State values
    const [currentWord, setCurrentWord] = useState("");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [difficulty, setDifficulty] = useState("medium");
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [maxGuessesForDifficulty, setMaxGuessesForDifficulty] = useState(maxGuesses[difficulty]);

    // Derived values
    const wrongGuessCount =
    guessedLetters.filter(letter => !currentWord.includes(letter)).length;
    const isGameWon =
    currentWord.split("").every(letter => guessedLetters.includes(letter));
    const isGameLost = wrongGuessCount === maxGuessesForDifficulty;
    const isGameOver = isGameWon || isGameLost;
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

    const [numGuessesLeft, setNumGuessesLeft] = useState(maxGuesses[difficulty] - wrongGuessCount)
    
    useEffect(() => {
        // Recalcula numGuessesLeft somente quando currentWord ou difficulty mudarem
        setNumGuessesLeft(maxGuesses[difficulty] - wrongGuessCount);
    }, [currentWord, wrongGuessCount]); // Apenas se esses valores mudarem


    useEffect(() => {
        if (isFirstLoad) {
          initializeGame(); // Call only once on the first load
        }
      }, [isFirstLoad]);

    useEffect(() => {
    // Atualiza o valor de maxGuessesForDifficulty sempre que a dificuldade mudar
    setMaxGuessesForDifficulty(maxGuesses[difficulty]);
    }, [currentWord]); // Isso vai garantir que a mudança de dificuldade atualize o valor
    

    function initializeGame() {
        setCurrentWord(getRandomWord());
        setGuessedLetters([]);
        setIsFirstLoad(false); // After initialization, set to false
      }



    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }

    function startNewGame() {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }

    const languageElements = languages.slice(0, maxGuessesForDifficulty).map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount;
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color,
        };
        const className = clsx("chip", isLanguageLost && "lost")
    
        return (
            <span className={className} style={styles} key={lang.name}>
                {lang.name}
            </span>
        )
    })

    const letterElements = currentWord.split("").map((letter, index) => {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
        const letterClassName = clsx(
            isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        )
        return (
            <span key={index} className={letterClassName}>
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        )
    })

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button
                className={className}
                key={letter}
                disabled={isGameOver}
                aria-disabled={guessedLetters.includes(letter)}
                aria-label={`Letter ${letter}`}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect) {
            return (
                <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }
        if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning <strong>Assembly!</strong> 😭</p>
                </>
            )
        }

        return null
    }

    return (
        <main>
            {
                isGameWon && 
                    <Confetti
                        recycle={false}
                        numberOfPieces={1000}
                    />
            }
            <header>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                    Assembly: Endgame
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Guess the word within 8 attempts to keep the
                programming world safe from Assembly!
            </motion.p>
            </header>

            <section
                aria-live="polite"
                role="status"
                className={gameStatusClass}
            >
                {renderGameStatus()}
            </section>

            <section className="language-chips">
                {languageElements}
            </section>

            <section className="word">
                {letterElements}
            </section>

            {/* Combined visually-hidden aria-live region for status updates */}
            <section
                className="sr-only"
                aria-live="polite"
                role="status"
            >
                <p>
                    {currentWord.includes(lastGuessedLetter) ?
                        `Correct! The letter ${lastGuessedLetter} is in the word.` :
                        `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {numGuessesLeft} attempts left.
                </p>
                <p>Current word: {currentWord.split("").map(letter =>
                    guessedLetters.includes(letter) ? letter + "." : "blank.")
                    .join(" ")}</p>

            </section>

            <section className="attempts">
                <p>Attempts left: {numGuessesLeft}</p>

                
            </section>

            <section className="keyboard">
                {keyboardElements}
            </section>

            {isGameOver &&
                <>
                    <select onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <button
                        className="new-game"
                        onClick={startNewGame}
                    >New Game
                    </button>
                </>
                }
        </main>
    )
}
