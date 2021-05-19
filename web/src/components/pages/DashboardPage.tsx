import * as React from "react";
import {
    PageSection,
    PageSectionVariants,
    Modal,
    ModalVariant,
    Button
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
        this.doPing()
    }

    async doPing() {
        let response = await fetch('/api/v1/ping')
        if (response.status == 200) {
            let body  = await response.text()
            console.log(body)
        }
    }

    render() {
        console.log('Rendering dashboard page ...')
        return (
            <PageSection variant={PageSectionVariants.light}> 
            <div>
            This is dashboard page 
            </div>
            </PageSection>
        );
    }
}