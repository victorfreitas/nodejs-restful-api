import isEmpty from 'src/helpers/isEmpty'
import Profile from './Profile'
import mergeFields from './defaultFields'

class CreateProfile extends Profile {
  getFields() {
    const { skills } = this.body

    if (!isEmpty(skills)) {
      this.body.skills = skills.split(',')
    }

    return mergeFields({
      user: this.user.id,
      ...this.body,
    })
  }

  process() {
    return this.Model.findOneAndUpdate(
      { user: this.user.id },
      { $set: this.getFields() },
      { new: true, upsert: true }
    )
  }
}

export default (req, res) => new CreateProfile(req, res)
