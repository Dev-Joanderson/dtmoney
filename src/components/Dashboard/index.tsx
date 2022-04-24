import { Summary } from "../Summary";
import { TransactionsTable } from "../TrasanctionsTable";
import { Container } from "./styles";


export function Dashboard(){
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>

    );
}