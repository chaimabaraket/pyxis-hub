import { DashboardHeader } from '@/components/dashboard/header';
import { ImageStats } from '@/components/dashboard/image-stats';
import { ImageExplorer } from '@/components/dashboard/image-explorer';
import { RepositoryStats } from '@/components/dashboard/repository-stats';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto p-6 space-y-6">
        <ImageStats />
        <RepositoryStats />
        <ImageExplorer />
      </main>
    </div>
  );
}