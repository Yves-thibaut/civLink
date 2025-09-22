'use client';

import { useState } from 'react';
import Layout from '@/src/frontend/components/Layout';
import { Button } from '@/src/frontend/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/frontend/components/ui/card';
import { Input } from '@/src/frontend/components/ui/input';
import { Textarea } from '@/src/frontend/components/ui/textarea';
import { Switch } from '@/src/frontend/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/frontend/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/frontend/components/ui/tabs';
import { ArrowLeft, Save, Bell, Shield, Globe, User, Mail, Phone, MapPin, Globe as GlobeIcon } from 'lucide-react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    weekly: true,
    mentions: true,
    collaborations: true
  });

  const [privacy, setPrivacy] = useState({
    profile: 'public',
    posts: 'public',
    contact: 'verified',
    location: 'country'
  });

  const [profile, setProfile] = useState({
    name: 'Centre d\'Initiatives pour le Développement et la Paix (CIDP)',
    description: 'Organisation pionnière dans la promotion de la paix, de la démocratie et du développement durable en Afrique centrale.',
    email: 'contact@cidp-cameroun.org',
    phone: '+237 677 123 456',
    website: 'www.cidp-cameroun.org',
    address: 'Douala, Cameroun',
    language: 'fr',
    timezone: 'Africa/Douala'
  });

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
            <p className="text-gray-600">Gérez vos préférences et paramètres de compte</p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Confidentialité</TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-orange-600" />
                  Informations du profil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de l'OSC *
                    </label>
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site web
                    </label>
                    <div className="relative">
                      <GlobeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        value={profile.website}
                        onChange={(e) => setProfile({...profile, website: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <Textarea
                    value={profile.description}
                    onChange={(e) => setProfile({...profile, description: e.target.value})}
                    rows={4}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      value={profile.address}
                      onChange={(e) => setProfile({...profile, address: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Langue
                    </label>
                    <Select value={profile.language} onValueChange={(value) => setProfile({...profile, language: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="pt">Português</SelectItem>
                        <SelectItem value="ar">العربية</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fuseau horaire
                    </label>
                    <Select value={profile.timezone} onValueChange={(value) => setProfile({...profile, timezone: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Africa/Douala">Douala (GMT+1)</SelectItem>
                        <SelectItem value="Africa/Lagos">Lagos (GMT+1)</SelectItem>
                        <SelectItem value="Africa/Nairobi">Nairobi (GMT+3)</SelectItem>
                        <SelectItem value="Africa/Johannesburg">Johannesburg (GMT+2)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                    <Save className="h-4 w-4 mr-2" />
                    Sauvegarder
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-orange-600" />
                  Préférences de notification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Notifications par email</h4>
                      <p className="text-sm text-gray-600">Recevoir des notifications par email</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Notifications push</h4>
                      <p className="text-sm text-gray-600">Recevoir des notifications dans le navigateur</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Notifications SMS</h4>
                      <p className="text-sm text-gray-600">Recevoir des notifications par SMS</p>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Résumé hebdomadaire</h4>
                      <p className="text-sm text-gray-600">Recevoir un résumé des activités de la semaine</p>
                    </div>
                    <Switch
                      checked={notifications.weekly}
                      onCheckedChange={(checked) => setNotifications({...notifications, weekly: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Mentions</h4>
                      <p className="text-sm text-gray-600">Être notifié quand quelqu'un vous mentionne</p>
                    </div>
                    <Switch
                      checked={notifications.mentions}
                      onCheckedChange={(checked) => setNotifications({...notifications, mentions: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Collaborations</h4>
                      <p className="text-sm text-gray-600">Être notifié des nouvelles collaborations</p>
                    </div>
                    <Switch
                      checked={notifications.collaborations}
                      onCheckedChange={(checked) => setNotifications({...notifications, collaborations: checked})}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                    <Save className="h-4 w-4 mr-2" />
                    Sauvegarder
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-orange-600" />
                  Paramètres de confidentialité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visibilité du profil
                    </label>
                    <Select value={privacy.profile} onValueChange={(value) => setPrivacy({...privacy, profile: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public - Visible par tous</SelectItem>
                        <SelectItem value="members">Membres uniquement</SelectItem>
                        <SelectItem value="private">Privé - Invitation uniquement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visibilité des posts
                    </label>
                    <Select value={privacy.posts} onValueChange={(value) => setPrivacy({...privacy, posts: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public - Visible par tous</SelectItem>
                        <SelectItem value="members">Membres uniquement</SelectItem>
                        <SelectItem value="followers">Abonnés uniquement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Qui peut vous contacter
                    </label>
                    <Select value={privacy.contact} onValueChange={(value) => setPrivacy({...privacy, contact: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="everyone">Tout le monde</SelectItem>
                        <SelectItem value="verified">OSC vérifiées uniquement</SelectItem>
                        <SelectItem value="followers">Abonnés uniquement</SelectItem>
                        <SelectItem value="none">Personne</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visibilité de la localisation
                    </label>
                    <Select value={privacy.location} onValueChange={(value) => setPrivacy({...privacy, location: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exact">Adresse exacte</SelectItem>
                        <SelectItem value="city">Ville uniquement</SelectItem>
                        <SelectItem value="country">Pays uniquement</SelectItem>
                        <SelectItem value="none">Aucune localisation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                    <Save className="h-4 w-4 mr-2" />
                    Sauvegarder
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
