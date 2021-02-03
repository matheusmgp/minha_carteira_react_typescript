import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container, Content } from './style';
import HistoryFinanceCard from '../../components/historyFinanceCard';
const List: React.FC =  () => {
    
    const mes = [
        {value: 'janeiro', label: 'Janeiro'},
        {value: 'fevereiro', label: 'Fevereiro'},
        {value: 'marco', label: 'Março'},
        {value: 'abril', label: 'Abril'},
        {value: 'maio', label: 'Maio'},
        {value: 'junho', label: 'Junho'},
        {value: 'julho', label: 'Julho'},
        {value: 'agosto', label: 'Agosto'},
        {value: 'setembro', label: 'Setembro'},
        {value: 'outubro', label: 'Outubro'},
        {value: 'novembro', label: 'Novembro'},
        {value: 'dezebro', label: 'Dezebro'}
    ]
    const ano = [
        {value: '2018', label: '2018'},
        {value: '2019', label: '2019'},
        {value: '2020', label: '2020'},
        {value: '2021', label: '2021'}
    ]
    return (
        <Container>
           <ContentHeader title="Saídas" lineColor="#E44C4E">
              <SelectInput options={mes}/>
               <SelectInput  options={ano}/>
           </ContentHeader>
           <Content>
            <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                     <HistoryFinanceCard                  
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 100,00"
                    />
                  
           </Content>
       </Container>
    );
}

export default List;