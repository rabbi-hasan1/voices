import React from 'react'
import HeroPattern from '../components/hero-pattern'
import { PageHeader } from '@/components/page-header';
import DashboardHeader from '../components/dashboard-header';
import TextInPutPanel from '../components/text-input-panel';
import { QuickActionsPanel } from '../components/quick-actions-panel';

function DashboardView() {
  return (
    <div className=' relative'>
      <PageHeader title='Dashboard' className='lg:hidden' />
      {/* <HeroPattern /> */}
      <div className=' relative space-y-8 p-4 lg:p-16'>
        <DashboardHeader />
        <TextInPutPanel />
        <QuickActionsPanel />
      </div>
    </div>
  )
}

export default DashboardView;
