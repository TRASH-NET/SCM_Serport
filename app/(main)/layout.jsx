'use client'
import { Toaster } from '@/components/ui/toaster'
import Navigation from '@/components/ux/Navigation'
import { CostCentreProvider } from '@/context/CostCentreContext'

const MainLayout = ({ children }) => {

    return (
        <CostCentreProvider>
            <div className='h-full flex bg-[#F6F9FF]'>
                <Navigation />
                <main className='flex-1 h-full overflow-y-auto pt-10 px-6 pb-2'>
                    {children}
                </main>
                <Toaster />
            </div>
        </CostCentreProvider>

    )
}

export default MainLayout