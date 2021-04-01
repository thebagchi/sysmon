import * as React from "react";
import {
    PageSection,
    PageSectionVariants
} from "@patternfly/react-core";

interface RoutesPageState {
    // Empty
}

interface RoutesPageProps {
    // Empty
}

export class RoutesPage extends React.Component<RoutesPageProps, RoutesPageState> {
    constructor(props: RoutesPageProps) {
        super(props);
    }

    componentDidMount(){
        document.title = "Routes | SysMon"
    }

    render() {
        console.log('Rendering routes page ...')
        return (
            <PageSection variant={PageSectionVariants.light}> This is routes page</PageSection>
        );
    }
}