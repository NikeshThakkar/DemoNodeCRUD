PGDMP                          {         	   sample_db    14.6    14.6     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    34974 	   sample_db    DATABASE     m   CREATE DATABASE sample_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE sample_db;
                postgres    false            �            1259    34975    users    TABLE     �  CREATE TABLE public.users (
    id uuid NOT NULL,
    "firstName" character varying(255) NOT NULL,
    "lastName" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    profileimg character varying(255),
    "isActive" boolean DEFAULT true
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    34975    users 
   TABLE DATA              COPY public.users (id, "firstName", "lastName", email, password, "createdAt", "updatedAt", profileimg, "isActive") FROM stdin;
    public          postgres    false    209   �       ]           2606    34981    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    209            �   Z  x�ŕ[O�8��ï�9��!�Jt
�i;�Uo|l�$MIZ
���tfY�^�D���O�=�k&=�� �4p�xʑW�cjxr���'��.
�$�]w���׬�y�ںJƸߺ�o�-:@�z>�:��]��59���Q~9�_�3\��`�	� ��IeFQJ�dL@��L/���^�/50TFB��:@��8P���vU�Lƭo~4�Mlv�)���'GW������a|w�?8�'����4��q�H�xJ8������l:}�h���Z7���.7�^Ɓ^�]��v��|U�z��m�t����N�ܹ�ou�����?VM�ҟU��")f�p,�J+?�⤄�cN ��*L �a
(&�cB=�0����E��k_&�U�l����������w��}6���p|_��a���VFa�I�(�T�����D�b��2.5�RE=��)��-X@"Y��먬�b�8���|y2(��	��?��䤷���y� ��`FxFD
�g��t���|v&��X	��qq9��� �LB�I��"����yҺng����'�q`���C��'�<^����YkuEȌ�����m��$����,8DՀ����L"�
P�hc����i쏻��ŗ����F���p��r���W���Ʉ*�Xi��c�D3��1������Hkb��!��I�*���c;�C�c������u�m��Ȝ�g#������m'��p����'�a�R%�Ay�D�z	���YJ�T$0�p �@��0L[����Ժ�'�)S]�muG�sqbVD<֨J+b�r<.�v���1;�'2��e����C�2�S�K�i�����<b�     