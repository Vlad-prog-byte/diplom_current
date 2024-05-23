export interface IArticle {
    id: number
    subject: string
    description?: string
    createdOn?: Date
    closedOn?: Date
    doneRatio: number
    dueDate?: Date
    estimatedHours: null
    isPrivate: boolean
    priority: {
        id: number
        name: string
    }
    project: {
        id: number
        name: string
    }
    startDate: Date
    status: {
        id: number
        name: string
    }

    tracker: {
        id: number
        name: string
    }
    author: {
        id: number
        name: string
    }
    updatedOn: Date
} 



export interface IPaper {
    id: number,
    subject: string,
    createdOn?: Date,
    updatedOn: Date
}