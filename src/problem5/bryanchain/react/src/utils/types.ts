interface Resource {
    id: string,
    title: string,
    body: string,
    createor: string
}

interface DisclaimerProps {
    title: string,
    description: string,
}

export type {
    Resource,
    DisclaimerProps,
}