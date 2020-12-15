import React from 'react';

export interface PlayerCardProps {
  name: string;
  team: string;
  manager?: string;
  cost?: number;
  keeperYearsLeft?: number;
}

const PlayerCard = ({
  name,
  team,
  cost,
  manager = 'Free Agent',
  keeperYearsLeft
}: PlayerCardProps) => {
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>{name}</h3>
        <p className='mt-1 max-w-2xl text-sm text-gray-500'>{team}</p>
      </div>
      <div className='border-t border-gray-200'>
        <dl>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Cost</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {cost}
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Manager</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {manager}
            </dd>
          </div>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>
              Keeper Years Left
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {keeperYearsLeft}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PlayerCard;
