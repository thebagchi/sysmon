import * as React from "react";
import {
    PageSection,
    PageSectionVariants
} from "@patternfly/react-core";

interface DashboardPageState {
    // Empty
}

interface DashboardPageProps {
    // Empty
}

export class DashboardPage extends React.Component<DashboardPageProps, DashboardPageState> {
    constructor(props: DashboardPageProps) {
        super(props);
    }

    componentDidMount(){
        document.title = "Dashboard | SysMon"
    }

    render() {
        console.log('Rendering dashboard page ...')
        return (
            <PageSection variant={PageSectionVariants.light}> This is dashboard page</PageSection>
        );
    }
}