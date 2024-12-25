import React from 'react';
import { Card } from 'antd';
import { useTranslation } from 'react-i18next';

import TransactionTable from '@/components/Transaction/table';
import './index.scss';

function TransactionsSection() {
  const { t } = useTranslation();

  return (
    <Card
      bordered={false}
      title={t('dashboard.transactiosn_section.title')}
      className="dashboard-transactions-container --custom"
    >
      <TransactionTable />
    </Card>
  );
}

export default TransactionsSection;
