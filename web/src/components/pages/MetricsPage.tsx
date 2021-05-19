import * as React from "react";
import {
    PageSection,
    PageSectionVariants
} from "@patternfly/react-core";

interface MetricsPageState {
    // Empty
}

interface MetricsPageProps {
    // Empty
}

export class MetricsPage extends React.Component<MetricsPageProps, MetricsPageState> {
    constructor(props: MetricsPageProps) {
        super(props);
    }

    componentDidMount(){
        document.title = "Metrics | SysMon"
    }

    render() {
        console.log('Rendering metrics page ...')
        return (
            <PageSection variant={PageSectionVariants.light}> This is metrics page </PageSection>
        );
    }
}