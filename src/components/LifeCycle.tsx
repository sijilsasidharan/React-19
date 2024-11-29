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
            counter: props.initialCount === state.counter ? props.initialCount : state.counter
        }
    }

    shouldComponentUpdate(nextProps: Readonly<LifeCycleProps>, nextState: Readonly<LifeCycleState>, nextContext: any): boolean {
        if (nextState.counter % 2) {
            return false;
        }
        return true;
    }

    handleRender = () => {
        this.setState((prev) => ({
            counter: prev.counter + 1
        }));
        console.log(this.state)
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<LifeCycleProps>, prevState: Readonly<LifeCycleState>) {
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return null;
    }

    render(): React.ReactNode {
        console.log('render', this.state);
        return <>
            { this.state.counter }
            <button className="border border-emerald-400 p-4 ml-4" onClick={this.handleRender}>Add</button>
        </>
    }
    componentDidMount(): void {
        console.log('componentDidMount', this.state)
    }
    
    componentDidUpdate(): void {
        console.log('componentDidUpdate', this.state)
    }
}