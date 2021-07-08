export interface Viewpoint {
    name?: string
    majorsName?: string
    classes?: { className: string }[]
    schoolYearName?: string
    points?: Point[]
}
export interface ViewpointCode {
    id?: number
    code?: string
    className?: string
}
interface Point {
    phase: number
    subjects: { name: string; point: number }[]
}
