export interface Note {
    id: number;
    title: string;
    text: string;
}

export const NOTES: Note[] = [
    {
        id: 1,
        title: 'Hampsters',
        text: 'Don\'t touch the hampsters. They will hiss at you!'
    },
    {
        id: 2,
        title: 'Shakespeare',
        text: 'To be or not to be. Overrated.'
    }
];