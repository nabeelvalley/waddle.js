const test = (label: string, run: () => void) => {
    try {
        run()
    } catch (error) {
        createColouredLog()
    }
}


export default test