// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import projects from './projects';
import aboutMe from './aboutMe';
import workExperience from './workExperience';
import skills from './skills';
import contact from './contact';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    aboutMe,
    projects,
    workExperience,
    skills,
    contact,
  ]),
});
