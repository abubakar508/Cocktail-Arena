import { MouseEventHandler } from "react"

export type FetchPropTypes = {
    query: string
}

export type CustomButtonPropTypes = {
    containerStyles?: string
    title?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
}