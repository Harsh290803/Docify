'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { GitBranchIcon, GitCommitIcon, MoreHorizontalIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

interface ProjectCardProps {
  url: string;
  repository_name: string;
  testing_dir: string;
  project_id: string;
  project_type: string;
  access_token: string;
  username: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  url,
  repository_name,
  testing_dir,
  project_id,
  project_type,
  access_token,
  username,
}) => {
  const router = useRouter();
  // console.log(project_id);
  const handleUmlClick = async () => {
    console.log('UML Clicked');

    const res = await fetch('/api/uml/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accessToken: access_token,
        userName: username,
        repoName: repository_name,
        projectType: project_type,
        projectId: project_id,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className='relative flex flex-col bg-white p-2 text-sm lg:flex-row dark:bg-gray-950'>
      <div className='grid flex-1 gap-1 p-2'>
        <div className='font-medium'>{repository_name}</div>
      </div>
      <Separator className='my-2 lg:hidden' />
      <div className='grid flex-1 gap-1 p-2'>
        <div className='flex items-start gap-2'>
          <span
            className={`inline-flex size-3 translate-y-1 rounded-full bg-green-400`}
          />
          <div>
            Ready
            <div className='text-gray-500 dark:text-gray-400'>2m 35s</div>
          </div>
        </div>
      </div>
      <Separator className='my-2 lg:hidden' />
      <div className='grid flex-1 gap-1 p-2'>
        <div className='flex items-center gap-2'>
          <GitBranchIcon className='size-4' />
          {testing_dir}
        </div>
        <div className='flex items-center gap-2'>
          <GitCommitIcon className='size-4' />
          <span className='line-clamp-1'>commit</span>
        </div>
      </div>
      <Separator className='my-2 lg:hidden' />
      <div className='grid flex-1 gap-1 p-2'>
        <div className='flex items-center gap-2 text-gray-500 dark:text-gray-400'>
          date
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className='absolute right-4 top-4'
            size='icon'
            variant='ghost'
          >
            <MoreHorizontalIcon className='size-4' />
            <span className='sr-only'>Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem>
            <button
              onClick={() => {
                router.push(`/generate_readme/${project_id}`);
              }}
            >
              Generate Readme
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>Test Plan</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button onClick={handleUmlClick}>UML Diagram</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProjectCard;
