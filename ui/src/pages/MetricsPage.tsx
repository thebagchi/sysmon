import * as React from "react";

interface RoutesPageState {
    // Empty
}

interface RoutesPageProps {
    // Empty
}

export default class RoutesPage extends React.Component<RoutesPageProps, RoutesPageState> {
    constructor(props: RoutesPageProps) {
        super(props);
    }

    componentDidMount(){
        document.title = "Metrics | Manager"
    }

    render() {
        console.log('Rendering metrics page ...')
        return (
            <p className="lead">
                This is metrics page.
            </p>
        );
    }
}