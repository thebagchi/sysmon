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
        document.title = "Dashboard | Manager"
    }

    render() {
        console.log('Rendering dashboard page ...')
        return (
            <p className="lead">
                This is dashboard page.
            </p>
        );
    }
}