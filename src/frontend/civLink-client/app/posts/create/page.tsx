'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft, Image, Video, FileText, Calendar, MapPin, Users, Hash, Plus, X } from 'lucide-react';

export default function CreatePostPage() {
  const [postType, setPostType] = useState('project');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [location, setLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');

  const postTypes = [
    { id: 'project', label: 'Projet', icon: FileText, color: 'bg-blue-100 text-blue-800' },
    { id: 'success', label: 'Succès', icon: Users, color: 'bg-green-100 text-green-800' },
    { id: 'opportunity', label: 'Opportunité', icon: Calendar, color: 'bg-orange-100 text-orange-800' },
    { id: 'news', label: 'Actualité', icon: FileText, color: 'bg-purple-100 text-purple-800' }
  ];

  const suggestedTags = [
    'Paix', 'Gouvernance', 'Démocratie', 'Formation', 'Développement',
    'Environnement', 'Santé', 'Éducation', 'Jeunesse', 'Femmes',
    'Innovation', 'Tech', 'Culture', 'Agriculture', 'Rural'
  ];

  const handleAddTag = (tag: string) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post submission
    console.log('Post submitted:', {
      type: postType,
      title,
      content,
      tags,
      image,
      location,
      eventDate,
      budget,
      deadline
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Créer un post</h1>
            <p className="text-gray-600">Partagez une actualité, un projet ou une opportunité avec la communauté</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Post Type Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Type de publication</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {postTypes.map((type) => (
                  <Button
                    key={type.id}
                    type="button"
                    variant={postType === type.id ? 'default' : 'outline'}
                    className={`h-auto p-4 flex flex-col items-center space-y-2 ${
                      postType === type.id ? 'bg-orange-500 hover:bg-orange-600' : ''
                    }`}
                    onClick={() => setPostType(type.id)}
                  >
                    <type.icon className="h-6 w-6" />
                    <span className="text-sm font-medium">{type.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Informations de base</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre *
                </label>
                <Input
                  placeholder="Donnez un titre accrocheur à votre publication"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contenu *
                </label>
                <Textarea
                  placeholder="Décrivez votre projet, partagez une actualité ou présentez une opportunité..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={6}
                  required
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center space-x-1">
                        <span>{tag}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ajouter un tag"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag(newTag))}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleAddTag(newTag)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-2">Suggestions :</p>
                    <div className="flex flex-wrap gap-1">
                      {suggestedTags
                        .filter(tag => !tags.includes(tag))
                        .slice(0, 8)
                        .map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => handleAddTag(tag)}
                            className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            {tag}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Media Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Média</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <label className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors cursor-pointer">
                      <Image className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Ajouter une image</p>
                    </div>
                  </label>
                  
                  <label className="flex-1">
                    <input
                      type="file"
                      accept="video/*"
                      className="hidden"
                    />
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors cursor-pointer">
                      <Video className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Ajouter une vidéo</p>
                    </div>
                  </label>
                </div>

                {image && (
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <Image className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{image.name}</span>
                    <button
                      type="button"
                      onClick={() => setImage(null)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Additional Information based on post type */}
          {(postType === 'project' || postType === 'opportunity') && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informations supplémentaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Localisation
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Ville, Pays"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {postType === 'project' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget
                      </label>
                      <Input
                        placeholder="Ex: 50,000€"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      />
                    </div>
                  )}

                  {postType === 'opportunity' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Échéance
                      </label>
                      <Input
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date de l'événement
                  </label>
                  <Input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Publishing Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Options de publication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="notify"
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="notify" className="text-sm text-gray-700">
                  Notifier mes abonnés par email
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="schedule"
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="schedule" className="text-sm text-gray-700">
                  Programmer la publication
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Enregistrer comme brouillon
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600"
            >
              <Hash className="h-4 w-4 mr-2" />
              Publier maintenant
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
