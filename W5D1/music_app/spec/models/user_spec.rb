require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { FactoryGirl.build(:user) } # email: email@place.com, pw: opensessame
  let!(:resetting_user) { FactoryGirl.create(:user, email: 'me1@me.com') } #pw: opensessame
  let!(:old_token) { resetting_user.session_token }
  let(:existing_email) { 'me1@me.com' }
  let(:wrong_email) { 'asdfasdf@asdfasfd.net' }
  let(:existing_pw) { 'opensessame' }
  let(:wrong_pw) { 'thispasswordiswrong' }

  # validations
  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password). is_at_least(6) }
  end

  describe 'instance methods' do
    describe '#is_password?' do
      context 'when given a correct password' do
        it 'returns true' do
          expect(user.is_password?('opensessame')).to be(true)
        end
      end

      context 'when given a bad password' do
        it 'returns false'  do
          expect(user.is_password?('wrongpw')).to be(false)
        end
      end
    end

    describe '#reset_session_token!' do
      it 'returns the new session token' do
        # old_token #`let` objects are lazily evaluated so call this before resetting
        expect(resetting_user.reset_session_token!).not_to eq(old_token)
      end

      it 'resets the user\'s session token in the model' do
        # old_token #`let` objects are lazily evaluated so call this before resetting
        resetting_user.reset_session_token!
        expect(resetting_user.session_token).not_to eq(old_token)
      end

      it "resets the user's session token as a string" do
        resetting_user.reset_session_token!
        expect(resetting_user.session_token).to be_a(String)
      end
    end
  end

  describe 'class methods' do
    describe '::find_by_credentials' do
      context 'when given an existing email' do
        it 'returns nil if the password is bad' do
          expect(User.find_by_credentials(existing_email, wrong_pw)).to be(nil)
        end
        it 'returns the user object if the password is good' do
          expect(User.find_by_credentials(existing_email, existing_pw)).to eq(resetting_user)
        end
      end
      context 'when giving a non-existing email' do
        it 'returns nil' do
          expect(User.find_by_credentials(wrong_email, existing_pw)).to be(nil)
        end
      end
    end
  end
end
