import React from 'react';
import { Container } from './style';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
const Dashboard: React.FC =  () => {

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
           <ContentHeader title="Dashboard" lineColor="#F7931B">
              <SelectInput options={mes}/>
               <SelectInput  options={ano}/>
           </ContentHeader>
       </Container>
    );
}

export default Dashboard;