import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Avatar from '../Avatar'

export default function Account({ session }) {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    {/* <NavbarMain /> */}
    <div className='flex justify-center mx-auto mt-12'>
      <div className="form-widget w-full">
        <Avatar
        uid={user.id}
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url)
          updateProfile({ username, website, avatar_url: url })
        }}
      />
        <div className='flex flex-col mb-6'>
          <label className='text-gray-500' htmlFor="email">Email</label>
          <input id="email" className='input input-bordered w-full max-w-xs' type="text" value={session.user.email} disabled />
        </div>
        <div className='flex flex-col mb-6'>
          <label className='text-gray-500' htmlFor="username">Username</label>
          <input
            id="username"
            className='input input-bordered w-full max-w-xs'
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='flex flex-col mb-6'>
          <label className='text-gray-500' htmlFor="website">Website</label>
          <input
            id="website"
            type="url"
            className='input input-bordered w-full max-w-xs'
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div>
          <button
            className="btn w-64 my-6 bg-blue-500 hover:bg-blue-600 border-none"
            onClick={() => updateProfile({ username, website, avatar_url })}
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Update Profile'}
          </button>
        </div>

        {/* <div>
          <button className="btn btn-outline btn-error w-64 mt-12" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        </div> */}
      </div>

    </div>
    </>
  )
}