import { useState } from "react"

// Use pre-typed versions of the React-Redux
// `useDispatch` and `useSelector` hooks
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementByProduct2,
  incrementIfOdd,
  selectCount,
  selectStatus,
} from "./counterSlice"

import styles from "./Counter.module.css"

export const Counter = () => {
  const dispatch = useAppDispatch() // incializamos el dispatch para poder utilizar las funciones de counterSlice
  const count = useAppSelector(selectCount) // usamos la variable count para tener guardado el conteo
  const status = useAppSelector(selectStatus) // guardamos en status del conteo
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement())
          }}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment())
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={e => {
            setIncrementAmount(e.target.value)
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementByAmount(incrementValue))
          }}
        >
          Add Amount
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          disabled={status !== "idle"}
          onClick={() => {
            dispatch(incrementAsync(incrementValue))
          }}
        >
          Add Async
        </button>
        <button
          className={styles.oddButton}
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue))
          }}
        >
          Add If Odd
        </button>

        <button className={styles.oddButton}
        onClick={() => {
          dispatch(incrementByProduct2())
        }}>
          Add Product
        </button>
      </div>
    </div>
  )
}
