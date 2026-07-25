import React from 'react';
import { projectsData } from '../../data/projectsData';
import SpatialCard from '../spatial/SpatialCard';

export default function Projects3D() {
  return (
    <group position={[0, -2, 0]}>
      {projectsData.map((project) => (
        <SpatialCard key={project.id} project={project} />
      ))}
    </group>
  );
}
