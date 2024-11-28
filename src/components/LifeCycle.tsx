import React from "react"
interface LifeCycleProps {
    initialCount: number;
}

interface LifeCycleState {
    counter: number;
}

export class LifeCycle extends React.Component<LifeCycleProps, LifeCycleState> {
    constructor(props: LifeCycleProps) {
        super(props);
        this.state = {
            counter: 1
        }
        console.log('contructure', this.state)
    }

    static getDerivedStateFromProps(props: LifeCycleProps, state: LifeCycleState) {
        console.log('getDerivedStateFromProps', props, state);
        return {
            counter: props.initialCount
        }
    }

    render(): React.ReactNode {
        console.log('render', this.state);
        return <>
            { this.state.counter }
        </>
    }
    componentDidMount(): void {
        console.log('componentDidMount', this.state)
    }
}